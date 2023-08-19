import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import store from "./stores/store";
import { Provider } from "react-redux";

console.log("root");

const element = document.getElementById("root")!;
const root = createRoot(element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
