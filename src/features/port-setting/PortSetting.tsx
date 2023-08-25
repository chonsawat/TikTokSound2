import { useState } from "react";
import InputPort from "../../components/InputPort";
import SettingButton from "../../components/Button/SettingButton";
import PortLabel from "./PortLabel";

const PortSetting = () => {
	const [showPort, setShowPort] = useState<boolean>(false);

	const onClickHandler = () => {
		setShowPort((current) => !current);
	};
	return (
		<div className={`flex ${showPort && "ml-5"}`}>
			{showPort && (
				<div>
					<PortLabel />
					<InputPort id="port" placeholder="Port" />
				</div>
			)}
			<div className="pt-7">
				<SettingButton onClick={onClickHandler}>Port</SettingButton>
			</div>
		</div>
	);
};

export default PortSetting;
