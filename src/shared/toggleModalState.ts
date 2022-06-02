import { IMessage } from "../types/IMessage";
import { MODAL_STATE_KEY } from "./constants";
import { validateCurrentIsDynatrace } from "./utils";

export const toggleModalState = <T = any>(currentModalState: boolean, successCallback: (response: T) => void, errorCallback: () => void) => {
	validateCurrentIsDynatrace({
		success: (currentTab) =>
			chrome.tabs.sendMessage(
				currentTab.id!,
				{
					key: MODAL_STATE_KEY,
					value: !currentModalState,
				},
				(response) => {
					successCallback(response);
				},
			),
		error: errorCallback,
	});
};

export const modalStateListener = (successCallback: (response: boolean) => void) => {
	chrome.runtime.onMessage.addListener((message: IMessage<boolean>, sender, sendResponse) => {
		if (message.key === MODAL_STATE_KEY) {
			successCallback(message.value);
			sendResponse(message.value);
		}
	});
};
