import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastProvider } from "oks-ui";
import "oks-ui/styles.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider position="top-right" maxVisibleToasts={3}>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
);
