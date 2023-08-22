const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const url = require("url");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 750,
    minWidth: 1100,
    minHeight: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
    icon: "src/assets/icon/icon.ico",
    autoHideMenuBar: true,
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
app.whenReady().then(() => {
  // Backend
  ipcMain.on("read", (event) => {
    const msg = fs.readFileSync(
      "C:\\Users\\Acer\\Documents\\TikTokSoundTemp\\temp.txt"
    );
    return msg;
  });

  ipcMain.handle("fakeFile", () => {
    const fakeFile = {
      lastModified: 1691056936807,
      lastModifiedDate: "Thu Aug 03 2023 17:02:16 GMT+0700 (Indochina Time) {}",
      name: "fart-sm.wav",
      path: "C:\\Users\\Acer\\Documents\\TikTokSoundTemp\\assets\\sound\\fart.wav",
      size: 361156,
      type: "audio/wav",
      webkitRelativePath: "",
    };
    console.log("path:", fakeFile.path);
    // console.log("path:", url.pathToFileURL(fakeFile.path));
    const file = url.pathToFileURL(fakeFile.path);
    return fs.readFileSync(fakeFile.path);
  });

  ipcMain.handle("getFileFromPath", (event, path) => {
    // console.log("path:", path);
    const file = url.pathToFileURL(path);
    console.log(file.href)
    return file.href;
  });
});
