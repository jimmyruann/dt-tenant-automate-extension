export interface ApplicationUserTags {
	list: List[];
}

interface List {
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
