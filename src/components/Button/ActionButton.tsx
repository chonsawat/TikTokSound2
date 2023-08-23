import React, { useState, useRef, useEffect } from "react";
import { MdDeleteOutline, MdPlayArrow } from "react-icons/md";
import { EventRecordType, eventActions } from "../../stores/events/event.slice";
import { useAppDispatch } from "../../stores/store";
import { ImSpinner7 } from "react-icons/im";
import ReactAudioPlayer from "react-audio-player";
import { getFileFromPath } from "../../utils/file";

export enum ActionButtonEnum {
  PLAY = "PLAY",
  PAUSE = "PAUSE",
  DELETE = "DELETE",
}

type ActionButtonProps = {
  action: string;
  data: EventRecordType;
};

const styleClass = `flex font-semibold py-2.5 px-5 rounded-lg shadow-lg`;

const ActionButton: React.FC<ActionButtonProps> = ({ action, data }) => {
  const dispatch = useAppDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioPath, setAudioPath] = useState<string | undefined>();
  const audioRef = useRef<ReactAudioPlayer | null>(null);
  const audioVolume = data.volume;

  useEffect(() => {
    console.log("ActionButton is mounted 🚀");
    return () => {
      console.log("ActionButton is unmounted 😀");
    };
  }, []);

  useEffect(() => {
    getFileFromPath(data.sound.path, setAudioPath);
    console.log("audioPath", audioPath);
    console.log("soundPath", data.sound.path);
  }, [audioPath, data]);

  // const getFileFromPath = async (path: string) => {
  //   try {
  //     const res = await ipcRenderer.invoke(
  //       ipcRendererType.getFileFromPath,
  //       path
  //     );
  //     setAudioPath(res);
  //   } catch (err) {
  //     if (err.code === undefined) {
  //       console.log(`${err.code} : ${err.message}`);
  //     } else {
  //       alert(`${err.code}: ${err.message}`);
  //     }
  //   }
  // };

  const onDeleteHandler = () => {
    const { id } = data;
    dispatch(eventActions.deleteEventRecord(id));
  };

  const onPlayToggleHandler = () => {
    const audioEvent = audioRef.current?.audioEl.current;
    const audioSrc = audioEvent?.src;

    if (!isPlaying) {
      // Play a audio and loop until pause button was clicked.
      if (audioEvent && audioSrc) {
        audioEvent.play();
        audioEvent.loop = true;
      }

      setIsPlaying((current) => !current);
    } else {
      // Stop sound playback
      if (audioEvent && audioSrc) {
        audioEvent.pause();
        audioEvent.load();
      }

      setIsPlaying((current) => !current);
    }
  };

  if (action === "PLAY") {
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
  } else if (action === "DELETE") {
    return (
      <div className="flex text-white">
        <a
          onClick={onDeleteHandler}
          href="#"
          className={`${styleClass} bg-red-500 shadow-red-500/30 hover:bg-red-800 hover:animate-pulse`}
        >
          Delete
          <MdDeleteOutline className="self-center ml-1" />
        </a>
      </div>
    );
  } else {
    return null;
  }
};

export default ActionButton;
