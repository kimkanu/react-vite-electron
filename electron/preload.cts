import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("darkMode", {
  toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
});
