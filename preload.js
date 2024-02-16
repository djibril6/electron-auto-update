const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("djib", {
  appVersion: () => ipcRenderer.invoke("app_version"),
  onUpdateAvailable: (callback) =>
    ipcRenderer.on("update_available", (_event) => callback()),
  onUpdateDownloaded: (callback) =>
    ipcRenderer.on("update_downloaded", (_event) => callback()),
  restart: () => ipcRenderer.send("restart_app"),
});
