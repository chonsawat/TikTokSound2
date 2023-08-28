import { useEffect, useState } from "react";
import { EventRecordType } from "../../stores/events/event.slice";
import * as fileUtils from "../../utils/file";
import DeleteButton from "../Button/DeleteButton";
import PlayButton from "../Button/PlayButton";
import CheckBox from "../CheckBox";
import EventSelection from "../EventSelection";
import FileInput from "../FileInput";
import VolumeRangeBar from "../VolumeRangeBar";
import { Fragment } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type TableRowProps = {
	data: EventRecordType;
};

const Loading = () => {
	const Spiner = () => (
		<div className="h-10 bg-slate-300 rounded animate-pulse"></div>
	);
	return (
		<>
			<tr className="bg-white border-b">
				<td id="play" scope="row" className="table-data">
					<Spiner />
				</td>
				<td id="volume" className="table-data">
					<Spiner />
				</td>
				<td id="enable" className="table-data">
					<Spiner />
				</td>
				<td
					id="event"
					className="table-data font-medium text-gray-900 whitespace-nowrap"
				>
					<Spiner />
				</td>
				<td id="sound" className="table-data">
					<Spiner />
				</td>
				<td id="delete" className="table-data">
					<Spiner />
				</td>
			</tr>
		</>
	);
};

const TableRow = ({ data }: TableRowProps) => {
	const [audioPath, setAudioPath] = useState<string | undefined>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	console.log("isLoading:", isLoading);

	useEffect(() => {
		fileUtils.getFileFromPath(data.sound.path, setAudioPath);
	}, [data.sound.path]);

	return (
		<Fragment>
			{isLoading && <Loading />}
			<Fragment>
				<tr className={`bg-white border-b ${isLoading ? "hidden" : ""}`}>
					<td id="play" scope="row" className="table-data">
						<PlayButton data={data} audioPath={audioPath} />
					</td>
					<td id="volume" className="table-data">
						<VolumeRangeBar data={data} />
					</td>
					<td id="enable" className="table-data">
						<CheckBox data={data} />
					</td>
					<td
						id="event"
						className="table-data font-medium text-gray-900 whitespace-nowrap"
					>
						<EventSelection data={data} />
					</td>
					<td id="sound" className="table-data">
						<FileInput
							data={data}
							audioPath={audioPath}
							setIsLoading={setIsLoading}
						/>
					</td>
					<td id="delete" className="table-data">
						<DeleteButton data={data} />
					</td>
				</tr>
			</Fragment>
		</Fragment>
	);
};

export default TableRow;
