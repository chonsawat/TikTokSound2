import React, { useState, useRef } from "react";
import { EventRecordType, eventActions } from "../stores/events/event.slice";
import { useEffect } from "react";
import { ipcRendererType } from "../services/ipcRenderer.type";
import { useAppDispatch } from "../stores/store";
import { getFileFromPath } from "../utils/file";

type FileInputProps = {
  data: EventRecordType;
};

const FileInput: React.FC<
  Omit<React.HTMLProps<HTMLInputElement>, "data"> & FileInputProps
> = ({ data }) => {
  const dispatch = useAppDispatch();
  const ipcRenderer = (window as any).ipcRenderer;
  const [file, setFile] = useState<string>(data.sound.path);
  const inputRef = useRef<HTMLInputElement>(null);

  // Convert path to file url
  // Maybe move to redux-thunk
  useEffect(() => {
    let isCancle = false;

    if (!isCancle) {
      if (data.sound.path) {
        getFileFromPath(data.sound.path, setFile);
      }
    }
    return () => {
      isCancle = true;
    };
  }, []);

  const getFileName = (path: string) => {
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

  // TODO: Re-enable
  if (data.sound.path !== undefined) {
    if (inputRef.current) {
      try {
        const filename = getFileName(file);

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
          console.log(data.sound);
        } else {
          alert(`${err.code}: ${err.message}`);
        }
      }
    }
  }

  const onChangeHandler = (event: any) => {
    const filePath = event.target.files[0].path;
    setFile(filePath);
    dispatch(
      eventActions.setEventRecordSound({ id: data.id, soundPath: filePath })
    );
  };

  return (
    <>
      <div>
        <input
          ref={inputRef}
          type="file"
          accept="audio/*"
          onChange={onChangeHandler}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
        />
      </div>
    </>
  );
};

export default FileInput;
