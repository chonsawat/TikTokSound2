import { LuCopy } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../stores/store";
import { portSelector } from "../stores/input/input.selector";
import { useEffect, useState } from "react";
import { ipcRendererType } from "../services/ipcRenderer.type";

const SteamingPage = () => {
	const port = useAppSelector(portSelector);

	const onClickHandler = () => {
		navigator.clipboard.writeText(`http://localhost:${port}`);
		toast.success("Copy to clipboard!");
	};

	useEffect(() => {
		window.onbeforeunload = () => {
			console.log("Don't loading");
			return true;
		};
		return () => {
			window.onbeforeunload = null;
		};
	});

	return (
		<>
			<div>SteamingPage</div>
			<div className="flex text-center items-center mt-3">
				<p className="font-semibold">Sound Url</p>

				<div className="ml-3">
					<button onClick={onClickHandler} className="flex">
						<code className="bg-slate-200 py-1 px-4 rounded-xl ml-3">
							http://localhost:{port}
						</code>
						<LuCopy className="self-center ml-2" />
					</button>
				</div>

				<div></div>
			</div>
			<ToastContainer
				position="bottom-right"
				autoClose={600}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				toastStyle={{
					backgroundColor: "white",
					textAlign: "center",
					fontWeight: "bolder",
				}}
			/>
		</>
	);
};

export default SteamingPage;
