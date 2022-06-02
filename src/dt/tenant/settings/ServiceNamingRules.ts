export const getApiUrl = () => {
	return "/rest/configuration/conditionalnaming?ruletype=SERVICE";
};

export interface ServiceNamingRules {
	rules: ServiceNamingRuleRule[];
	builtinRules: BuiltinRule[];
	pgEntities: PGEntity[];
	placeholders: Placeholder[];
	supportedAttributes: SupportedAttribute[];
}

export interface BuiltinRule {
	id: string;
	type: string;
	nameFormat: string;
	enabled: boolean;
	conditions: BuiltinRuleCondition[];
	builtIn: boolean;
	builtInKey: string;
}

export interface ServiceNamingRuleRule {
	id: string;
	type: string;
	nameFormat: string;
	displayName: string;
	enabled: boolean;
	conditions: PurpleCondition[];
	builtIn: boolean;
}

export interface PurpleCondition {
	conditionAttributeId: SupportedAttribute;
	negate: boolean;
	comparisonOperator: string;
	value: string;
	caseIgnore: boolean;
	tagValue?: TagValue;
}

export interface PGEntity {
	displayName: string;
	id: string;
	type: string;
	techTypes: any[];
	softwareTechs: any[];
	otherFlag: boolean;
	hostTags: any[];
	pgTags: any[];
	autoTags: Metrics;
	enabled: boolean;
	selectable: boolean;
}

export interface Placeholder {
	conditionAttributeId: SupportedAttribute;
	placeholder: string;
}

export interface Metrics {}

export interface SupportedAttribute {
	conditionAttribute: string;
	dynamicPropId: string;
	dynamicPropIdKey: string;
}

export interface BuiltinRuleCondition {
	conditionAttributeId: SupportedAttribute;
	negate: boolean;
	comparisonOperator: string;
	value: string;
	caseIgnore: boolean;
}

export interface TagValue {
	context: string;
	key: string;
	value: string;
}
