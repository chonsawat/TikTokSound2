import { ipcRendererType } from "../services/ipcRenderer.type";

const ipcRenderer = (window as any).ipcRenderer;

export const isFileExist = async (path: string): Promise<boolean> => {
	const isFileExisted = await ipcRenderer.invoke(
		ipcRendererType.isFileExist,
		path
	);
	return isFileExisted;
};

export const getFileFromPath = async (
	path: string,
	customFunc: (newState: string) => void
): Promise<void> => {
	try {
		if (await isFileExist(path)) {
			const res = await ipcRenderer.invoke(
				ipcRendererType.getFileFromPath,
				path
			);
			customFunc(res);
		}
	} catch (err) {
		if (err.code === undefined) {
			console.log(`${err.code} : ${err.message}`);
		} else {
			alert(`${err.code}: ${err.message}`);
		}
	}
};

export const getFileName = (path: string): string | undefined => {
	let filename;
	try {
		if (path.includes("\\")) {
			filename = path.split("\\").pop();
		} else {
			filename = path.split("/").pop();
		}
	} catch (err) {
		alert(`${err.code}: ${err.message}`);
	}
	return filename;
};

export const updateInputFileName = (
	inputRef: React.RefObject<HTMLInputElement>,
	file: string
): void => {
	if (inputRef.current) {
		try {
			const filename = getFileName(file)?.replaceAll("%20", " ");

			const myFile = new File([file], filename as string, {
				type: "audio/*",
				lastModified: Date.now(),
			});

			// Now let's create a DataTransfer to get a FileList
			const dataTransfer = new DataTransfer();
			dataTransfer.items.add(myFile);
			inputRef.current.files = dataTransfer.files;
		} catch (err) {
			if (err.code === undefined) {
				console.log("updateInputFileName - file", file);
			} else {
				alert(`${err.code}: ${err.message}`);
			}
		}
	}
};
