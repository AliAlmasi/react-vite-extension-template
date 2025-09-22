import { ResponseMsgObject } from "../lib/types";

chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
  if (msg.type !== "RUN_EXTENSION") return;

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab: chrome.tabs.Tab = tabs[0];
    const tabId: number = tab.id ?? chrome.tabs.TAB_ID_NONE;
    const tabUrl: string = tab.url?.toLowerCase() ?? "";

    if (!tab || !tab.url) {
      sendResponse({
        success: false,
        data: { error: "Tabs permission not allowed" },
      });
      return;
    }

    if (
      !(
        tabUrl.includes("alialmasi.ir") ||
        tabUrl.includes("127.0.0.1") ||
        tabUrl.includes("localhost")
      )
    ) {
      sendResponse({
        success: false,
        data: {
          error: "Not allowed to run in this page",
        },
      });
      return;
    }

    const isMV3 =
      !!chrome.scripting &&
      typeof chrome.scripting.executeScript === "function";

    if (isMV3)
      chrome.scripting.executeScript(
        { target: { tabId }, files: ["content.js"] },
        () => {
          chrome.tabs.sendMessage(
            tabId,
            { type: "RUN_MAIN" },
            (res: ResponseMsgObject) => {
              sendResponse(res);
            }
          );
        }
      );
    else
      chrome.tabs.executeScript(tabId, { file: "content.js" }, () => {
        chrome.tabs.sendMessage(
          tabId,
          { type: "RUN_MAIN" },
          (res: ResponseMsgObject) => {
            sendResponse(res);
          }
        );
      });
  });

  return true;
});
