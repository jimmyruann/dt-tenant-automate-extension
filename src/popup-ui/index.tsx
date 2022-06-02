import React from "react";
import ReactDOM from "react-dom";
import { POPUP_HTML_ID } from "../shared/constants";
import App from "./app";

chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById(POPUP_HTML_ID),
	);
});
