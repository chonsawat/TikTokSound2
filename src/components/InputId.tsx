import { useAppDispatch } from "../stores/store";
import { inputActions } from "../stores/input/input.slice";

export const InputId = () => {
  const dispatch = useAppDispatch();

  return (
    <input
      className="mt-2 border py-2 px-3 rounded-lg border-cyan-300 border-t-orange-500"
      type="text"
      placeholder="@uniqueId"
      onChange={(event) => dispatch(inputActions.setUid(event.target.value))}
    />
  );
};
