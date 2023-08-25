import { useEffect, useState } from "react";
import * as fileUtils from "../utils/file";
import ReactAudioPlayer from "react-audio-player";

const aleartHandler = (path: string) => {
	if (path === undefined) {
		alert(`Please, select your sound first!`);
	} else {
		alert(`File: ${path} does not exist`);
	}
};

const usePlayButton = (path: string) => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [audioSrcIsExist, setAudioSrcIsExist] = useState<boolean>(false);

	useEffect(() => {
		fileUtils.isFileExist(path!).then((res) => setAudioSrcIsExist(res));
	}, [path]);

	const onPlayButtonClick = (audioRef: React.RefObject<ReactAudioPlayer>) => {
		const audioEvent = audioRef.current?.audioEl.current;

		if (!audioSrcIsExist) {
			aleartHandler(path);
			return;
		}

		if (!isPlaying) {
			// Play a audio and loop until pause button was clicked.
			if (audioEvent && audioSrcIsExist) {
				audioEvent.play();
				audioEvent.loop = true;
			}
			setIsPlaying((current) => !current);
		} else {
			// Stop sound playback
			if (audioEvent && audioSrcIsExist) {
				audioEvent.pause();
				audioEvent.load();
			}
			setIsPlaying((current) => !current);
		}
	};

	return {
		isPlaying,
		onPlayButtonClick,
	};
};

export default usePlayButton;
