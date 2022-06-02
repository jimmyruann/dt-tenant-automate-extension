export const getApiUrl = () => {
	return "/rest/configuration/tagging";
};

export interface ManualTaggingRules {
	tags: Tag[];
}

export interface Tag {
	key: string;
	count: number;
	value?: string;
}
