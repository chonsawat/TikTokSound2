import React, { useState, useRef } from "react";
import { EventRecordType, eventActions } from "../stores/events/event.slice";
import { useEffect } from "react";
import { ipcRendererType } from "../services/ipcRenderer.type";
import { useAppDispatch } from "../stores/store";

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

  // Maybe move to redux-thunk
  useEffect(() => {
    let isCancle = false;
    async function getFake() {
      if (data.sound.path) {
        const res = await ipcRenderer.invoke(
          ipcRendererType.getFileFromPath,
          data.sound.path
        );
        setFile(res);
      }
    }
    if (!isCancle) {
      getFake();
    }
    return () => {
      isCancle = true;
    };
  }, []);

  // TODO: Reenable
  if (data.sound.path !== undefined) {
    if (inputRef.current) {
      try {
        let filename;
        // console.log("fileInput found", inputRef);
        if (file.includes("\\")) {
          filename = file.split("\\").pop();
        } else {
          filename = file.split("/").pop();
        }
        const myFile = new File([file], filename as string, {
          type: "audio/*",
          lastModified: Date.now(),
        });

        // Now let's create a DataTransfer to get a FileList
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(myFile);
        inputRef.current.files = dataTransfer.files;
      } catch (error) {
        if (error.code === undefined) {
          // console.log("My Error" + error.message);
          console.log(data.sound);
          // console.log("Descript file:", file);
        } else {
          alert(`${error.code}: ${error.message}`);
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
