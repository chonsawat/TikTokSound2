import { IoSettings } from "react-icons/io5";

export const SettingButton: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
	children,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			type="submit"
			className={`ml-5 text-white px-4 py-2 rounded-md font-semibold shadow-lg hover:shadow-md bg-pink-600 hover:bg-pink-800 upper shadow-pink-800/75`}
		>
			<div className="flex">
				{children}
				<IoSettings size={20} className="animate-pulse ml-3 self-center" />
			</div>
		</button>
	);
};

export default SettingButton;
