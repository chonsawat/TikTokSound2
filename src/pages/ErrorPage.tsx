import { ToastContainer, toast } from "react-toastify";

type ErrorPageProps = {
	error: Error;
};

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
	const onClickHandler = () => {
		navigator.clipboard.writeText(error.message);
		toast.success("Copy to clipboard!");
	};
	return (
		<div className="h-screen flex justify-center text-3xl">
			<div className="flex flex-col self-center text-center">
				<div className="flex flex-row place-items-center self-center justify-center bg-stone-900 py-3 px-5 rounded-3xl mb-5">
					<div className="bg-white rounded-3xl p-5 mr-5"></div>
					<h2 className="h2 font-bold uppercase text-white">Error Page</h2>
				</div>
				<div className="flex items-center content-center self-center mb-5">
					<button onClick={onClickHandler} className="flex">
						<code className="bg-stone-100 py-1 px-4 rounded-xl ml-3">
							<p className="text-lg">{error.message}</p>
						</code>
					</button>
				</div>
				<code className="self-center bg-stone-700 w-[70%] md:w-[70%] rounded-lg p-5 shadow-md shadow-stone-600">
					<p className="animate-pulse text-sm text-slate-200 hover:animate-none">
						{error.stack}
					</p>
				</code>
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
				className="text-sm"
			/>
		</div>
	);
};

export default ErrorPage;
