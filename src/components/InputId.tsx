import { useAppDispatch } from "../stores/store";
import { inputActions } from "../stores/input/input.slice";

const InputId: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
	id,
	value,
}) => {
	const dispatch = useAppDispatch();

	return (
		<input
			id={id}
			className="border py-2 px-3 rounded-lg border-cyan-300 border-t-orange-500"
			type="text"
			placeholder="@uniqueId"
			value={value}
			onChange={(event) => dispatch(inputActions.setUid(event.target.value))}
		/>
	);
};
export default InputId;
