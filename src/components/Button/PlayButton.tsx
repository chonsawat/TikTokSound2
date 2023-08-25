import React, { useState, useRef, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";
import { EventRecordType } from "../../stores/events/event.slice";
import { ImSpinner7 } from "react-icons/im";
import ReactAudioPlayer from "react-audio-player";
import { getFileFromPath } from "../../utils/file";
import usePlayButton from "../../hooks/usePlayButton";

type PlayButtonProps = {
	data: EventRecordType;
};

const styleClass = `flex font-semibold py-2.5 px-5 rounded-lg shadow-lg`;

const PlayBtn = () => (
	<>
		<p className="">PAUSE</p>
		<ImSpinner7 className="animate-spin ml-2 self-center" />
	</>
);
const PauseBtn = () => (
	<>
		<p className="">PLAY</p>{" "}
		<MdPlayArrow size={20} className="ml-3 self-center" />
	</>
);

const PlayButton: React.FC<PlayButtonProps> = ({ data: { volume, sound } }) => {
	const { isPlaying, onPlayButtonClick } = usePlayButton(sound.path);
	const [audioPath, setAudioPath] = useState<string | undefined>();
	const audioRef = useRef<ReactAudioPlayer | null>(null);

	useEffect(() => {
		let isOnThisPage = true;
		if (isOnThisPage) {
			getFileFromPath(sound.path, setAudioPath);
		}
		return () => {
			isOnThisPage = false;
		};
	}, [audioPath, sound.path]);

	const onPlayToggleHandler = async () => {
		onPlayButtonClick(audioRef);
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
				{isPlaying ? <PlayBtn /> : <PauseBtn />}
			</a>
			<ReactAudioPlayer
				ref={audioRef}
				src={audioPath}
				volume={volume}
			></ReactAudioPlayer>
		</div>
	);
};

export default PlayButton;
