export const getApiUrl = (applicationId: string) => {
	return `/rest/configshared/appconversiongoals/appId/${applicationId}`;
};

export interface ApplicationConversionGoals {
	list: List[];
}

export interface List {
	id: string;
	enabled: boolean;
	type: string;
	name: string;
	destinationDetails?: DestinationDetails;
	userActionDetails?: UserActionDetails;
}

export interface DestinationDetails {
	urlOrPath: string;
	matchType: string;
	caseSensitive: boolean;
}

export interface UserActionDetails {
	matchEntity: string;
	matchType: string;
	value: string;
	actionType: string;
	caseSensitive: boolean;
}
