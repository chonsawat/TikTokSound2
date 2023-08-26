const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const url = require("url");
const morgan = require("morgan");
const express = require("express");
const { exec } = require("child_process");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
	app.quit();
}

const createWindow = () => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 1250,
		height: 750,
		minWidth: 1100,
		minHeight: 700,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			nodeIntegration: true,
			webSecurity: false,
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
	let server = undefined;
	let router = undefined;
	const appExpress = express();
	appExpress.use(morgan("tiny"));
	appExpress.use((req, res, next) => {
		router(req, res, next);
	});

	ipcMain.handle("isFileExist", (event, path) => {
		if (fs.existsSync(path)) {
			return true;
		}
		return false;
	});

	ipcMain.handle("getFileFromPath", (event, path) => {
		const file = url.pathToFileURL(path);
		return file.href;
	});

	ipcMain.on("hostServerOnPort", (event, port) => {
		// Check if the port is already in use
		const isPortInUse = (port) => {
			const result = exec(`netstat -ano | findstr /i "${port}"`);
			return result.stdout.length !== 0;
		};
		
		if (isPortInUse(!port)) {
			router = express.Router();
			router.get("/", (req, res) => {
				res.send("This is response from http://localhost:" + port);
				
				// TODO: Streaming algorithms
				console.log("Streaming Algorithms", Math.random());
				console.log("This is random", Math.random());
			});

			server = appExpress.listen(port, (err) => {
				console.log("Server listening on port " + port);
			});
		}
	});

	ipcMain.on("closeServerOnPort", (event, port) => {
		console.log("Close server http://localhost:" + port);
		if (server) {
			server.close();
		}
	});
});
