import React, { useState, useRef } from "react";
import { EventRecordType, eventActions } from "../stores/events/event.slice";
import { useEffect } from "react";
import { useAppDispatch } from "../stores/store";
import * as fileUtils from "../utils/file";

type FileInputProps = {
	data: EventRecordType;
};

const FileInput: React.FC<
	Omit<React.HTMLProps<HTMLInputElement>, "data"> & FileInputProps
> = ({ data }) => {
	const dispatch = useAppDispatch();
	const [file, setFile] = useState<string>(data.sound.path);
	const inputRef = useRef<HTMLInputElement>(null);

	// Convert path to file url
	// Maybe move to redux-thunk
	useEffect(() => {
		let isCancle = false;
		if (!isCancle) {
			if (file) {
				fileUtils.getFileFromPath(data.sound.path, setFile);
			}
		}
		return () => {
			isCancle = true;
		};
	}, []);

	// TODO: Re-enable
	if (data.sound.path !== undefined) {
		fileUtils.updateInputFileName(inputRef, file);
	}

	const onChangeHandler = (event: any) => {
		const filePath = event.target.files[0]?.path;
		if (filePath !== undefined) {
			setFile(filePath);
			dispatch(
				eventActions.setEventRecordSound({ id: data.id, soundPath: filePath })
			);
		} else {
			fileUtils.updateInputFileName(inputRef, file);
		}
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
