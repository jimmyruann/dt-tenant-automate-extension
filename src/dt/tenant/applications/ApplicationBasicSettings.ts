export interface ApplicationBasicSettings {
	totalCount: number;
	settings: Setting[];
	readOnly: boolean;
	modified: number;
	author: string;
}

interface Setting {
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

interface ModificationInfo {
	deletable: boolean;
	modifiable: boolean;
	movable: boolean;
	first: boolean;
	modifiablePaths: any[];
	nonModifiablePaths: any[];
}

interface Value {
	rum: Rum;
	sessionReplay: Rum;
}

interface Rum {
	enabled: boolean;
	costAndTrafficControl: number;
}
