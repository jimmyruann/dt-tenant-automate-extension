export interface ManualTaggingRules {
	tags: Tag[];
}

interface Tag {
	key: string;
	count: number;
	value?: string;
}
