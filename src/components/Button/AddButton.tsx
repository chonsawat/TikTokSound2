import React from "react";
import { MdAdd } from "react-icons/md";
import { v4 as uuid } from "uuid";
import { eventActions } from "../../stores/events/event.slice";
import { useAppDispatch } from "../../stores/store";

type AddButtonProps = {
	additionalClass: string;
} & React.HTMLProps<HTMLButtonElement>;

const AddButton: React.FC<AddButtonProps> = ({ additionalClass }) => {
	const dispatch = useAppDispatch();
	const id = uuid();

	const onClickHandle = () => {
		dispatch(
			eventActions.addEventRecord({
				id,
				enable: true,
				event: {
					name: "Please select",
					imageUrl:
						"https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734",
				},
				volume: 0.2,
				sound: {},
			})
		);
	};

	return (
		<button
			onClick={onClickHandle}
			className={`ml-5 self-center px-1 rounded-md bg-slate-400 hover:bg-amber-500 hover:shadow hover:amber-lime-500 hover:text-white ${additionalClass}`}
		>
			<div className="flex">
				<p className="p-[4px] center text-white font-bold">ADD </p>
				<MdAdd className="self-center text-white animate-pulse" />
			</div>
		</button>
	);
};

export default AddButton;
