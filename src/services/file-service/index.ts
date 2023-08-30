import fs from "fs";

import { ipcMain } from "electron";

import url from "url";

let counter = 1;

const isFileExist = () =>
	ipcMain.handle("isFileExist", (event, { path, reason }) => {
		const isExist = fs.existsSync(path);
		console.log(`${counter} : ${isExist} : ${reason} => ${path}`);
		counter = counter + 1;
		if (isExist) {
			return true;
		}
		return false;
	});

const getFileFromPath = () =>
	ipcMain.handle("getFileFromPath", (event, path) => {
		const file = url.pathToFileURL(path);
		return file.href;
	});

const FileServices = {
	isFileExist,
	getFileFromPath,
};

export default FileServices;
