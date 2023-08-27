import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import * as fileUtils from "../utils/file";

const aleartHandler = (path: string) => {
	if (path === undefined) {
		alert(`Please, select your sound first!`);
	} else {
		alert(`File: ${path} does not exist`);
	}
};

const usePlayButton = (path: string) => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	const onPlayButtonClick = async (
		audioRef: React.RefObject<ReactAudioPlayer>
	) => {
		let isLoading = true;
		let audioSrcIsExist = false;
		const audioEvent = audioRef.current?.audioEl.current;

		audioSrcIsExist = await fileUtils.isFileExist({
			path: path!,
			reason: "Playing sound",
		});
		isLoading = false;

		if (!audioSrcIsExist && !isLoading) {
			aleartHandler(path);
			audioEvent?.pause();
			audioEvent?.load();
			setIsPlaying(false);
			return;
		}

		if (!isPlaying && !isLoading) {
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
