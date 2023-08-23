import { ipcRendererType } from "../services/ipcRenderer.type";

const ipcRenderer = (window as any).ipcRenderer;

export const getFileFromPath = async (
  path: string,
  customFunc: (newState: string) => void
) => {
  try {
    if (path) {
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
