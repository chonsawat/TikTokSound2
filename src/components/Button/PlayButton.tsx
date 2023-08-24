import React, { useState, useRef, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";
import { EventRecordType } from "../../stores/events/event.slice";
import { ImSpinner7 } from "react-icons/im";
import ReactAudioPlayer from "react-audio-player";
import { getFileFromPath } from "../../utils/file";
import * as fileUtils from "../../utils/file";

type PlayButtonProps = {
	data: EventRecordType;
};

const styleClass = `flex font-semibold py-2.5 px-5 rounded-lg shadow-lg`;

const PlayButton: React.FC<PlayButtonProps> = ({ data }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [audioPath, setAudioPath] = useState<string | undefined>();
	const audioRef = useRef<ReactAudioPlayer | null>(null);
	const audioVolume = data.volume;

	useEffect(() => {
		let isOnThisPage = true;
		if (isOnThisPage) {
			getFileFromPath(data.sound.path, setAudioPath);
		}
		return () => {
			isOnThisPage = false;
		};
	}, [audioPath, data]);

	const onPlayToggleHandler = async () => {
		const audioEvent = audioRef.current?.audioEl.current;
		const audioSrcIsExist: boolean = await fileUtils.isFileExist(
			data.sound.path!
		);

		// Aleart
		if (!audioSrcIsExist) {
			if (data.sound.path === undefined) {
				alert(`Please, select your sound first!`);
			} else {
				alert(`File: ${data.sound.path} does not exist`);
			}
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

	const isPlayingColor = isPlaying
		? "bg-rose-500 shadow-rose-500/20 hover:bg-rose-800 text-white"
		: "bg-slate-100 shadow-slate-800/20 hover:bg-slate-800 text-black hover:text-white";

	return (
		<div className="flex">
			<a
				onClick={onPlayToggleHandler}
				href="#"
				className={`${styleClass} ${isPlayingColor} no-underline`}
			>
				{isPlaying ? (
					<>
						<p className="">PAUSE</p>{" "}
						<ImSpinner7 className="animate-spin ml-2 self-center" />
					</>
				) : (
					<>
						<p className="">PLAY</p>{" "}
						<MdPlayArrow size={20} className="ml-3 self-center" />
					</>
				)}
			</a>
			<ReactAudioPlayer
				ref={audioRef}
				src={audioPath}
				volume={audioVolume}
			></ReactAudioPlayer>
		</div>
	);
};

export default PlayButton;
