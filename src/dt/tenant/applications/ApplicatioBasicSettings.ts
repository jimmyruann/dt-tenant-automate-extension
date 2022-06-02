export const getApiUrl = (applicationId: string) => {
	// Example appId: APPLICATION-08EBD5603755FA87
	const [type, appId] = applicationId.split("-");
	return `/rest/v2/settings/persistence/builtin:rum.web.enablement/APPLICATION/${appId}?includeValues=true`;
};

export interface ApplicationBasicSettings {
	totalCount: number;
	settings: Setting[];
	readOnly: boolean;
	modified: number;
	author: string;
}

export interface Setting {
	creationTimestamp: number;
	revision: number;
	name: string;
	origin: string;
	version: string;
	author: string;
	key: string;
	updateToken: string;
	value: Value;
	readOnly: boolean;
	modificationInfo: ModificationInfo;
}

export interface ModificationInfo {
	deletable: boolean;
	modifiable: boolean;
	movable: boolean;
	first: boolean;
	modifiablePaths: any[];
	nonModifiablePaths: any[];
}

export interface Value {
	rum: Rum;
	sessionReplay: Rum;
}

export interface Rum {
	enabled: boolean;
	costAndTrafficControl: number;
}
