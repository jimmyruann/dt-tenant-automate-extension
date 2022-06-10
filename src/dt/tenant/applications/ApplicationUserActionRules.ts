interface ApplicationUserActionRules {
	splitUserActionsByDomain: boolean;
	caseInsensitiveRules: boolean;
	improvedLoadActionDetection: boolean;
	totalRulesCount: number;
}

interface ActionNamingRule {
	id: string;
	predefined: boolean;
	template: string;
	conditions: any[];
	orConditions: boolean;
}

export interface ApplicationUserLoadActionRules extends ApplicationUserActionRules {
	loadActionNamingRules: ActionNamingRule[];
}

export interface ApplicationUserXHRActionRules extends ApplicationUserActionRules {
	xhrActionNamingRules: ActionNamingRule[];
}

export interface ApplicationUserCustomActionRules extends ApplicationUserActionRules {
	customActionNamingRules: ActionNamingRule[];
}
