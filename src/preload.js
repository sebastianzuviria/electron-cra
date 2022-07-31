const { ipcRenderer, contextBridge } = require('electron');

//define functions that React App can see
contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('playwright', message);
    }
  }
})