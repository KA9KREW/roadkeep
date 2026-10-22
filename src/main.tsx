import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { bootPortal } from "./portal";

// CrazyGames HTML5 common fixes: arrow keys and space must not scroll the
// iframe, and a right-click must not open the browser menu over the game.
const scrollKeys = new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "]);
window.addEventListener(
  "keydown",
  (event) => {
    const target = event.target as HTMLElement | null;
    const typing =
      target &&
      (target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.isContentEditable);
    if (typing || event.metaKey || event.ctrlKey || event.altKey) return;
    if (scrollKeys.has(event.key) || event.code === "Space") event.preventDefault();
  },
  { passive: false },
);
document.addEventListener("contextmenu", (event) => {
  const target = event.target as HTMLElement | null;
  if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
  event.preventDefault();
});

bootPortal();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
