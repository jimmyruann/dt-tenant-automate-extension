export interface ApplicationConversionGoals {
	list: List[];
}

interface List {
	id: string;
	enabled: boolean;
	type: string;
	name: string;
	destinationDetails?: DestinationDetails;
	userActionDetails?: UserActionDetails;
}

interface DestinationDetails {
	urlOrPath: string;
	matchType: string;
	caseSensitive: boolean;
}

interface UserActionDetails {
	matchEntity: string;
	matchType: string;
	value: string;
	actionType: string;
	caseSensitive: boolean;
}
