import path from "node:path";
import { app, BrowserWindow, ipcMain, nativeTheme } from "electron";

async function main() {
  await new Promise((resolve) => app.on("ready", resolve));

  const win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, "electron/preload.cjs"),
    },
  });

  ipcMain.handle("dark-mode:toggle", () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = "light";
    } else {
      nativeTheme.themeSource = "dark";
    }
    return nativeTheme.shouldUseDarkColors;
  });

  const startUrl = process.env.ENTRY_URL ?? (() => {
    const url = new URL("file://");
    url.pathname = path.join(__dirname, "index.html");
    return url.toString();
  })();

  console.log(startUrl);

  await win.loadURL(startUrl);
}

main();
