const pretty = require("js-object-pretty-print").pretty;
const output = document.querySelector(".output");
const render = (msg = {}) => {
  const out = pretty(msg);
  output.innerHTML = "";
  output.innerHTML = `${out}`;
};

// For long-lived connections:
chrome.runtime.onConnectExternal.addListener(function(port) {
  if (!port) return;
  port.onMessage.addListener(function(msg) {
    render(msg);
  });
});
