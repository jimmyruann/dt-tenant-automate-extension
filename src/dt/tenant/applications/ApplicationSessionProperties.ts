export const getApiUrl = (applicationId: string) => {
	return `/rest/configshared/uemsessionuseractionproperties/appId/${applicationId}`;
};

export interface ApplicationSessionProperties {
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
	displayName: string;
	targets: string[];
	gdprRelevant: boolean;
	ignoreCase: boolean;
	sensitiveData: boolean;
	stringLength: number;
	metadataId: number;
}
