import { motion } from "framer-motion";
import React, { useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { ImSpinner7 } from "react-icons/im";
import { MdPlayArrow } from "react-icons/md";
import tw from "tailwind-styled-components";
import usePlayButton from "../../hooks/usePlayButton";
import { EventRecordType } from "../../stores/events/event.slice";

type PlayButtonProps = {
	data: EventRecordType;
	audioPath?: string;
};

const BaseButton = tw.a<{ $isPlay: boolean }>`
	py-2.5 px-5
	rounded-lg shadow-lg no-underline
	flex 
	font-semibold
	cursor-pointer
	${(p) =>
		p.$isPlay
			? "bg-rose-500 shadow-rose-500/20 hover:bg-rose-800 text-white"
			: "bg-slate-100 shadow-slate-800/20 hover:bg-slate-800 text-black hover:text-white"}
`;

const PlayBtn = () => (
	<>
		<p className="">PAUSE</p>
		<ImSpinner7 className="animate-spin ml-2 self-center" />
	</>
);
const PauseBtn = () => (
	<>
		<p>PLAY</p>
		<MdPlayArrow size={20} className="ml-3 self-center" />
	</>
);

const PlayButton: React.FC<PlayButtonProps> = ({
	data: { volume, sound },
	audioPath,
}) => {
	const { isPlaying, onPlayButtonClick } = usePlayButton(sound.path);
	const audioRef = useRef<ReactAudioPlayer | null>(null);

	const onPlayToggleHandler = async () => {
		onPlayButtonClick(audioRef);
	};

	return (
		<div className="flex">
			<BaseButton
				$as={motion.a}
				whileTap={{
					scale: 0.9,
				}}
				whileHover={{ scale: 1.05 }}
				transition={{ duration:0.1, stiffness: 500, type: "spring" }}
				onClick={onPlayToggleHandler}
				$isPlay={isPlaying}
			>
				{isPlaying ? <PlayBtn /> : <PauseBtn />}
			</BaseButton>

			<ReactAudioPlayer
				ref={audioRef}
				src={audioPath}
				volume={volume}
			></ReactAudioPlayer>
		</div>
	);
};

export default PlayButton;
