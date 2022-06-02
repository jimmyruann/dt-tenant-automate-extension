export const getApiUrl = (applicationId: string) => {
	return `/rest/configshared/uemusertag/appId/${applicationId}`;
};

export interface ApplicationUserTags {
	list: List[];
}

export interface List {
	enabled: boolean;
	type: string;
	name: string;
	origin: string;
	aggregation: string;
	uniqueId: number;
	key: string;
	targets: string[];
	gdprRelevant: boolean;
	ignoreCase: boolean;
	sensitiveData: boolean;
	stringLength: number;
	metadataId: number;
}
