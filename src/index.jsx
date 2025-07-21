import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ContextProvider = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

root.render(<ContextProvider />);
