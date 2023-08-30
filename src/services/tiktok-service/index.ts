import { exec } from "child_process";
import { Express, Request, Response, Router } from "express";
import { Server } from "http";

import { ipcMain } from "electron";

const hostServerOnPort = (
	router?: Router,
	server?: Server,
	appExpress?: Express
) =>
	ipcMain.on("hostServerOnPort", (event, port) => {
		// Check if the port is already in use
		const isPortInUse = (port: string) => {
			const result: any = exec(`netstat -ano | findstr /i "${port}"`);
			return result.stdout.length !== 0;
		};

		if (isPortInUse(port)) {
			router = Router();
			router!.get("/", (req: Request, res: Response) => {
				res.send("This is response from http://localhost:" + port);

				// TODO: Streaming algorithms
				console.log("Streaming Algorithms", Math.random());
				console.log("This is random", Math.random());
			});

			server = appExpress!.listen(port, () => {
				console.log("Server listening on port " + port);
			});
		}
	});

const closeServerPort = (server?: Server) =>
	ipcMain.on("closeServerOnPort", (event, port) => {
		console.log("Close server http://localhost:" + port);
		if (server) {
			server.close();
		}
	});

const TikTokServices = {
	hostServerOnPort,
	closeServerPort,
};

export default TikTokServices;
