export interface RequestNamingRules {
	list?: RequestNamingRuleList[];
}

interface RequestNamingRuleList {
	id: string;
	enabled: boolean;
	namingPattern: string;
	methodNamingConditions: MethodNamingCondition[];
	methodNamingExtractions: MethodNamingExtraction[];
}

interface MethodNamingCondition {
	attribute: string;
	matcher: string;
	negate: boolean;
	value?: string;
	condition?: string;
	useFromChildCalls: boolean;
	caseSensitive: boolean;
}

interface MethodNamingExtraction {
	attribute: string;
	name: string;
	kind: string;
	normalization: string;
	useFromChildCalls: boolean;
	extractor: string;
}
