export const getApiUrl = () => {
	return "/rest/v2/settings/persistence/builtin:alerting.profile/tenant/tenant?inheritedOnly=false&includeValues=true&includeSummaries=true";
};

export interface AlertingProfiles {
	totalCount: number;
	settings: AlertingProfileSetting[];
	readOnly: boolean;
	modified: number;
	author: string;
}

export interface AlertingProfileSetting {
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

export interface ModificationInfo {
	deletable: boolean;
	modifiable: boolean;
	movable: boolean;
	first: boolean;
	modifiablePaths: any[];
}

export interface PurpleValue {
	name: string;
	severityRules: SeverityRule[];
	eventFilters: EventFilter[];
	managementZone?: string;
}

export interface EventFilter {
	type: string;
	predefinedFilter: PredefinedFilter;
}

export interface SeverityRule {
	severityLevel: string;
	delayInMinutes: number;
	tagFilterIncludeMode: string;
}

export interface PredefinedFilter {
	eventType: string;
	negate: boolean;
}
