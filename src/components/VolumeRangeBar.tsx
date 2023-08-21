import React, { useState } from "react";
import { useAppDispatch } from "../stores/store";
import { EventRecordType, eventActions } from "../stores/events/event.slice";

type VolumeRangeBarProps = {
  data: EventRecordType;
};

const VolumeRangeBar: React.FC<VolumeRangeBarProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const [percentage, setPercentage] = useState<number>(data.volume * 100);

  const onVolumeChange = (event: any) => {
    setPercentage(parseFloat(event.target.value));
  };

  const onVolumeChangeDone = (event: any) => {
    dispatch(
      eventActions.setEventRecordVolume({
        id: data.id,
        volume: percentage,
      })
    );
  }

  return (
    <>
      <label>{percentage.toFixed(0)}%</label>
      <input
        type="range"
        className="transparent h-3 w-full cursor-pointer appearance-none border-transparent bg-neutral-200 rounded-full"
        style={{
          backgroundImage: `linear-gradient(90deg, #0ea5e9 ${percentage}% , transparent ${percentage}%`,
        }}
        value={percentage}
        onChange={onVolumeChange}
        onClickCapture={onVolumeChangeDone}
        placeholder="100"
        min="0"
        max="100"
      />
    </>
  );
};

export default VolumeRangeBar;
