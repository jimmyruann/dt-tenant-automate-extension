export const getApiUrl = () => {
	return "/rest/configuration/requestNaming";
};

export interface RequestNamingRules {
	list: RequestNamingRuleList[];
}

export interface RequestNamingRuleList {
	id: string;
	enabled: boolean;
	namingPattern: string;
	methodNamingConditions: MethodNamingCondition[];
	methodNamingExtractions: MethodNamingExtraction[];
}

export interface MethodNamingCondition {
	attribute: string;
	matcher: string;
	negate: boolean;
	value?: string;
	condition?: string;
	useFromChildCalls: boolean;
	caseSensitive: boolean;
}

export interface MethodNamingExtraction {
	attribute: string;
	name: string;
	kind: string;
	normalization: string;
	useFromChildCalls: boolean;
	extractor: string;
}
