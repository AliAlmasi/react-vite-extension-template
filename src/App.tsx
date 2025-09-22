import { ResponseMsgObject } from "./lib/types";
import style from "./assets/App.module.css";

export default function App(): React.ReactNode {
  const handleRunClick = () => {
    chrome.runtime.sendMessage(
      { type: "RUN_EXTENSION" },
      (res: ResponseMsgObject) => {
        if (!res.success) alert(`ERROR: ${res.data.error}`);
      }
    );
  };

  return (
    <>
      <div className={style.titleBox}>
        <img
          src="/icons/48.png"
          height={48}
          width={48}
          style={{ borderRadius: 8 }}
        />
        <h1>Vite+React</h1>
      </div>
      <div className={style.central}>
        <p>Hello, world!</p>
        <button
          className={style.run}
          onClick={handleRunClick}
          children={"Click me!"}
        />
      </div>
      <ul className={style.list}>
        <li>
          <a
            href="https://github.com/alialmasi/react-vite-extension-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>&middot;</li>
        <li>
          <a
            href="https://alialmasi.ir"
            target="_blank"
            rel="noopener noreferrer"
          >
            Author
          </a>
        </li>
      </ul>
    </>
  );
}
