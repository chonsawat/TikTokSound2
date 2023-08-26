import { useAppDispatch, useAppSelector } from "../stores/store";
import { inputActions } from "../stores/input/input.slice";
import { portSelector } from "../stores/input/input.selector";

type InputPortProps = {
	setPort: (port: string) => void;
	port: string;
} & React.HTMLProps<HTMLButtonElement>;

const InputPort: React.FC<InputPortProps> = ({
	id,
	placeholder,
	port,
	setPort,
}) => {
	return (
		<div className="flex flex-row">
			<input
				className="border py-2 px-3 rounded-lg border-cyan-300 border-t-orange-500"
				type="text"
				value={port}
				id={id}
				placeholder={placeholder}
				onChange={(event) => setPort(event.target.value)}
			/>
		</div>
	);
};

export default InputPort;
