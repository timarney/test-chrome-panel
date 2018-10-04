Adds a dev tools panel for outputing state data to from an app.


Code for app sending the message

```javascript
const panelId = "panel-id-here";
const port = chrome.runtime.connect(panelId); // eslint-disable-line
port.postMessage({
time: new Date().toLocaleTimeString()});
```