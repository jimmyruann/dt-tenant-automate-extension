import React from "react";
import ReactDOM from "react-dom";
import { FOREGROUND_HTML_ID } from "../shared/constants";
import App from "./app";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById(FOREGROUND_HTML_ID),
);
