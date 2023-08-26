import { useState } from "react";
import InputPort from "../../components/InputPort";
import SettingButton from "../../components/Button/SettingButton";
import PortLabel from "./PortLabel";
import { useAppDispatch, useAppSelector } from "../../stores/store";
import { portSelector } from "../../stores/input/input.selector";
import { inputActions } from "../../stores/input/input.slice";

const PortSetting = ({ isConnected }: { isConnected: boolean }) => {
	const dispatch = useAppDispatch();
	const [showPort, setShowPort] = useState<boolean>(false);
	const [port, setPort] = useState<string>(
		useAppSelector(portSelector).toString()
	);
	const showPortText = showPort ? "Save" : "Port";

	const onSave = () => {
		if (showPort) {
			dispatch(inputActions.setPort(port));
		}
	};

	const onClickHandler = () => {
		setShowPort((current) => !current);
		onSave();
	};

	return (
		<>
			{!isConnected && (
				<div className={`flex ${showPort && "ml-5"}`}>
					{showPort && (
						<div>
							<PortLabel />
							<InputPort
								id="port"
								placeholder="Port"
								setPort={setPort}
								port={port}
							/>
						</div>
					)}
					<div className="pt-7">
						<SettingButton onClick={onClickHandler}>
							{showPortText}
						</SettingButton>
					</div>
				</div>
			)}
		</>
	);
};

export default PortSetting;
