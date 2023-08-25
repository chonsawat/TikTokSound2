import { useAppDispatch, useAppSelector } from "../stores/store";
import { inputActions } from "../stores/input/input.slice";
import { portSelector } from "../stores/input/input.selector";

const InputPort: React.FC<React.HTMLProps<HTMLInputElement>> = ({
	id,
	placeholder,
}) => {
	const dispatch = useAppDispatch();
	const port = useAppSelector(portSelector);

	return (
		<div className="flex flex-row">
			<input
				className="border py-2 px-3 rounded-lg border-cyan-300 border-t-orange-500"
				type="text"
				value={port}
				id={id}
				placeholder={placeholder}
				onChange={(event) => dispatch(inputActions.setPort(event.target.value))}
			/>
		</div>
	);
};

export default InputPort;
