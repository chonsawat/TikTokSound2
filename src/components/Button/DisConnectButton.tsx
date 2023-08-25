import { Button, ButtonType } from "./Button";

const DisConnectButton: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
	onClick: onClickHandler,
}) => {
	return (
		<>
			<Button onClick={onClickHandler} buttonType={ButtonType.DISCONNECT}>
				Disconnect
			</Button>
		</>
	);
};

export default DisConnectButton;
