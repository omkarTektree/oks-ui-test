import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "oks-ui/styles.css";
import "./styles/theme.css";
import App from "./App.jsx";
import { ToastProvider } from "oks-ui";
import { BrowserRouter } from "react-router-dom";
import { initTheme } from "./lib/theme";

initTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider position="top-right" maxVisibleToasts={3}>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
);
