import React from "react";

type VolumeRangeBarProps = {
  percentage: number;
  onVolumeChange: (event: unknown) => void;
};

const VolumeRangeBar: React.FC<
  VolumeRangeBarProps & React.HTMLProps<HTMLInputElement>
> = ({ percentage, onVolumeChange }) => {
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
        placeholder="100"
        min="0"
        max="100"
      />
    </>
  );
};

export default VolumeRangeBar;
