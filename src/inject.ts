import { FOREGROUND_HTML_ID, MODAL_STATE_KEY } from "./shared/constants";
import { modalStateListener } from "./shared/toggleModalState";

const body = document.querySelector("body");
const head = document.querySelector("head");

if (body && head) {
	// Prevent spam of DOM element added into the page
	if (!body.querySelector(`#${FOREGROUND_HTML_ID}`)) {
		const foreground_entry_point = document.createElement("div");
		foreground_entry_point.id = FOREGROUND_HTML_ID;
		body.appendChild(foreground_entry_point);
		console.log(`[DT Tenant Health Check] #${FOREGROUND_HTML_ID} was injected into DOM.`);

		const foreground_script = document.createElement("script");
		foreground_script.type = "text/javascript";
		foreground_script.src = chrome.runtime.getURL("foreground.js");
		head.appendChild(foreground_script);
		console.log(`[DT Tenant Health Check] Foreground was injected.`);

		modalStateListener((response) => {
			window.postMessage({ key: MODAL_STATE_KEY, value: response });
		});
	}
} else {
	console.error("[DT Tenant Health Check] Unable to find <body> in document. Unable to inject.");
}
