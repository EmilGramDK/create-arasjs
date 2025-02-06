/// <reference types="vite/client" />
/// <reference types="aras-types/globals" />

import "./app.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useArasProvider } from "aras-lib";
import { App } from "./app";

useArasProvider().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
