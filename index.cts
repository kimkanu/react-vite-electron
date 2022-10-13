import path from "node:path";
import { app, BrowserWindow, ipcMain, nativeTheme } from "electron";
import * as electron from "electron";
import { handlers } from "./electron/handlers.cjs";

async function main() {
  await new Promise((resolve) => app.on("ready", resolve));

  const win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, "electron/preload.cjs"),
    },
  });

  const _handlers = handlers(electron);
  for (const [namespace, handlers] of Object.entries(_handlers)) {
    for (const [name, handler] of Object.entries(handlers)) {
      ipcMain.handle(`${namespace}:${name}`, handler);
    }
  }

  const startUrl = process.env.ENTRY_URL ?? (() => {
    const url = new URL("file://");
    url.pathname = path.join(__dirname, "index.html");
    return url.toString();
  })();

  await win.loadURL(startUrl);
}

main();
