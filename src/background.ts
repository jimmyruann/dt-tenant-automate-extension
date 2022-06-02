// Inject scripts
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status === "complete" && tab.url && tab.url.includes("https")) {
		chrome.scripting.executeScript({
			files: ["./inject.js"],
			target: {
				tabId,
			},
		});
	}
});
