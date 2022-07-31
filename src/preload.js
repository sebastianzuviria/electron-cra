const { ipcRenderer, contextBridge } = require('electron');

//define functions that React App can see
contextBridge.exposeInMainWorld('electron', {
  playwrightApi: {
    startPlaywright(message) {
      ipcRenderer.send('playwright', message);
    }
  }
})