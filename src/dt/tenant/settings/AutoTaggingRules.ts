export interface AutoTaggingRules {
	items: AutoTaggingRuleItem[];
}

interface AutoTaggingRuleItem {
	name: string;
	id: string;
	count: number;
}
