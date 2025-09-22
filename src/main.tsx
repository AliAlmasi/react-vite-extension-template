import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/index.css";

ReactDOM.createRoot(document.getElementById("vite")!).render(
  <StrictMode children={<App />} />
);
