const main = async () => window.alert("Hello from the extension");

chrome.runtime.onMessage.addListener(async (msg, _, sendResponse) => {
  if (msg.type === "RUN_MAIN")
    await main()
      .then(() =>
        sendResponse({
          success: true,
          data: {
            message: "main function executed",
          },
        })
      )
      .catch((error) =>
        sendResponse({
          success: false,
          data: {
            error,
          },
        })
      );
});
