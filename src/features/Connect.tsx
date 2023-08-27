import { BsDisplay } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Button, ButtonType } from "../components/Button/Button";
import InputId from "../components/InputId";
import InputPort from "../components/InputPort";
import SwitchPageButton from "../components/Button/SwitchPageButton";
import {
	isConnectSelector,
	portSelector,
	tiktokUidSelector,
} from "../stores/input/input.selector";
import { inputActions } from "../stores/input/input.slice";
import { useAppDispatch, useAppSelector } from "../stores/store";
import SettingButton from "../components/Button/SettingButton";
import PortSetting from "./port-setting/PortSetting";
import DisConnectButton from "../components/Button/DisConnectButton";
import ConnectButton from "../components/Button/ConnectButton";
import { ipcRendererType } from "../services/ipcRenderer.type";

type ConnectProps = {
	pathname: string;
};

type SwitchComponentProps = {
	isConnected: boolean;
	pathname: string;
};

const SwitchComponent: React.FC<SwitchComponentProps> = ({
	isConnected,
	pathname,
}) => {
	return (
		<>
			{isConnected &&
				(pathname !== "/stream" ? (
					<SwitchPageButton toPage="stream">
						<div className="flex flex-row">
							<p>Stream</p>
							<BsDisplay
								size={20}
								className="animate-bounce ml-3 self-center"
							/>
						</div>
					</SwitchPageButton>
				) : (
					<SwitchPageButton toPage="/">
						<div className="flex flex-row">
							Setting
							<IoSettings size={20} className="animate-spin ml-3 self-center" />
						</div>
					</SwitchPageButton>
				))}
		</>
	);
};

const Connect: React.FC<React.PropsWithChildren & ConnectProps> = ({
	children,
	pathname,
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const uid = useAppSelector(tiktokUidSelector);
	const isConnected = useAppSelector(isConnectSelector);
	const port = useAppSelector(portSelector);

	const ipcRenderer = (window as any).ipcRenderer;

	const onClickHandler = () => {
		console.log(uid);
		dispatch(inputActions.setIsConnect(!isConnected));
		if (isConnected) {
			ipcRenderer.send(ipcRendererType.closeServerOnPort, port);
		} else {
			ipcRenderer.send(ipcRendererType.hostServerOnPort, port);
		}

		if (!isConnected) {
			navigate("stream");
		} else {
			navigate("/");
		}
	};

	return (
		<>
			<div className="m-10">
				<h1 className="mt-5 text-3xl font-bold">TikTok Sound</h1>
				<div className="flex mt-3">
					<div>
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
						>
							@uniqueId
						</label>
						<InputId id="username" value={uid} />
					</div>
					<div className="flex">
						<PortSetting isConnected={isConnected}/>
					</div>
					<div className="flex pt-7">
						{isConnected ? (
							<DisConnectButton onClick={onClickHandler} />
						) : (
							<ConnectButton onClick={onClickHandler} />
						)}
						<SwitchComponent pathname={pathname} isConnected={isConnected} />
					</div>
				</div>
				<div className="mt-5">{children}</div>
			</div>
		</>
	);
};

export default Connect;
