import { data } from "./sample/data";
import "./style.css";
const pretty = require("js-object-pretty-print").pretty;
const output = document.querySelector(".output");
const render = (msg = {}) => {
  const out = pretty(msg, 4, 'html');
  output.innerHTML = `${out}`;
};

// For long-lived connections:
if (chrome && chrome.runtime && chrome.runtime.onConnectExternal) {
  chrome.runtime.onConnectExternal.addListener(function(port) {
    if (!port) return;
    port.onMessage.addListener(function(msg) {
      render(msg);
    });
  });
}

render(data);