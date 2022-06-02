export const isSaaS = (url: string): boolean => {
	/**
	 *
	 * https://*.live.dynatrace.com/*
	 * https://*.dev.dynatracelabs.com/*
	 * https://*.sprint.dynatracelabs.com/*
	 *
	 */

	const prodRegExp = new RegExp(/https:\/\/[a-z0-9]+.live.dynatrace.com(.*?)$/);
	const devRegExp = new RegExp(/https:\/\/[a-z0-9]+.dev.dynatracelabs.com(.*?)$/);
	const sprintRegExp = new RegExp(/https:\/\/[a-z0-9]+.sprint.dynatracelabs.com(.*?)$/);

	return prodRegExp.test(url) || devRegExp.test(url) || sprintRegExp.test(url);
};

export const isManaged = (url: string): boolean => {
	const prodRegExp = new RegExp(/https:\/\/(.*?).managed.internal.dynatrace.com:8021\/e\/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(.*?)$/);
	const devRegExp = new RegExp(/https:\/\/(.*?).managed-dev.internal.dynatracelabs.com:8021\/e\/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(.*?)$/);
	const sprintRegExp = new RegExp(/https:\/\/(.*?).managed-sprint.internal.dynatracelabs.com:8021\/e\/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(.*?)$/);

	return prodRegExp.test(url) || devRegExp.test(url) || sprintRegExp.test(url);
};

export const isDynatraceURL = (url: string): boolean => {
	return isSaaS(url) || isManaged(url);
};

export const getCSRF = () => {
	return {
		header: (window as any)["csrf_header_name"] || null,
		token: (window as any)["csrf_token"] || null,
	};
};

export const validateCurrentIsDynatrace = ({ success, error }: { success: (currentTab: chrome.tabs.Tab) => void; error?: () => void }) => {
	chrome.tabs.query(
		{
			active: true,
			currentWindow: true,
		},
		(currentTabs) => {
			if (currentTabs.length && currentTabs[0] && currentTabs[0].id) {
				if (currentTabs[0].url && isDynatraceURL(currentTabs[0].url)) {
					success(currentTabs[0]);
				} else {
					error && error();
				}
			}
		},
	);
};
