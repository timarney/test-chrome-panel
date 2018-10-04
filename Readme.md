## Info
Adds a dev tools panel for outputing state data to from an app.

## Usage

Add the following to your app and call when you update context.

```javascript
export const postToPanel = state = {} => {
  const panelId = 'igmmelopebbnchhfinabogohnchgceen'
  const port = chrome.runtime.connect(panelId); // eslint-disable-line
  port.postMessage(state);
};

```

## To publish a new version 

```
yarn build
```

Create a .zip file and upload to the Chrome store


## App page

https://chrome.google.com/webstore/detail/app-context/igmmelopebbnchhfinabogohnchgceen
