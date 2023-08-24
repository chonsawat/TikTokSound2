import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ErrorBoundary } from "react-error-boundary";

import store, { persistor } from "./stores/store";

import App from "./app";
import ErrorPage from "./pages/ErrorPage";

const element = document.getElementById("root")!;
const root = createRoot(element);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ErrorBoundary FallbackComponent={ErrorPage}>
					<App />
				</ErrorBoundary>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
