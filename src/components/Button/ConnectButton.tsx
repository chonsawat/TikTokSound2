import React from "react";
import { Button, ButtonType } from "./Button";

const ConnectButton: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
	onClick: onClickHandler,
}) => {
	return (
		<>
			<Button onClick={onClickHandler} buttonType={ButtonType.CONNECT}>
				Connect
			</Button>
		</>
	);
};

export default ConnectButton;
