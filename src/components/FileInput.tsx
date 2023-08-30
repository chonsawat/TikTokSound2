import React, { useEffect, useRef, useState } from "react";
import { EventRecordType, eventActions } from "../stores/events/event.slice";
import { useAppDispatch } from "../stores/store";
import * as fileUtils from "../utils/file";

type FileInputProps = {
	data: EventRecordType;
	audioPath?: string;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const FileInput: React.FC<
	Omit<React.HTMLProps<HTMLInputElement>, "data"> & FileInputProps
> = ({ data, audioPath, setIsLoading }) => {
	const dispatch = useAppDispatch();
	const [file, setFile] = useState<string>(audioPath || data.sound.path);
	const inputRef = useRef<HTMLInputElement>(null);

	if (data.sound.path !== undefined) {
		fileUtils.updateInputFileName(inputRef, file);
	}

	useEffect(() => {
		setIsLoading(false);
	}, [audioPath]);

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
