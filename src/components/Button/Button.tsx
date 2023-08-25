export enum ButtonType {
	CONNECT,
	DISCONNECT,
}

type ButtonProps = {
	buttonType: ButtonType;
};

export const Button: React.FC<
	React.HTMLProps<HTMLButtonElement> & ButtonProps
> = ({ children, onClick, buttonType }) => {
	const additionalClass: string =
		buttonType === ButtonType.CONNECT
			? "bg-cyan-400 hover:bg-cyan-600 upper shadow-cyan-600/75"
			: "bg-rose-600 hover:bg-rose-800 upper shadow-rose-600/75";

	return (
		<button
			onClick={onClick}
			type="submit"
			className={`ml-5 text-white px-4 rounded-md font-semibold shadow-lg hover:shadow-md ${additionalClass}`}
		>
			{children}
		</button>
	);
};
