export const getApiUrl = () => {
	return "/rest/configuration/autotagging";
};

export interface AutoTaggingRules {
	items: AutoTaggingRuleItem[];
}

export interface AutoTaggingRuleItem {
	name: string;
	id: string;
	count: number;
}
