export interface AlertingProfiles {
	totalCount: number;
	settings: AlertingProfileSetting[];
	readOnly: boolean;
	modified: number;
	author: string;
}

interface AlertingProfileSetting {
	creationTimestamp: number;
	revision: number;
	name: string;
	origin: string;
	version: string;
	author: string;
	key: string;
	updateToken: string;
	value: PurpleValue;
	summary: string;
	readOnly: boolean;
	modificationInfo: ModificationInfo;
}

interface ModificationInfo {
	deletable: boolean;
	modifiable: boolean;
	movable: boolean;
	first: boolean;
	modifiablePaths: any[];
}

interface PurpleValue {
	name: string;
	severityRules: SeverityRule[];
	eventFilters: EventFilter[];
	managementZone?: string;
}

interface EventFilter {
	type: string;
	predefinedFilter: PredefinedFilter;
}

interface SeverityRule {
	severityLevel: string;
	delayInMinutes: number;
	tagFilterIncludeMode: string;
}

interface PredefinedFilter {
	eventType: string;
	negate: boolean;
}
