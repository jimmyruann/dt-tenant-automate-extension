export const getApiUrl = () => {
	return "/rest/configuration/conditionalnaming?ruletype=HOST";
};

export interface HostNamingRules {
	rules: HostNamingRuleRule[];
	builtinRules: any[];
	pgEntities: PGEntity[];
	placeholders: Placeholder[];
	supportedAttributes: SupportedAttribute[];
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

export interface SupportedAttribute {
	conditionAttribute: string;
	dynamicPropId: string;
	dynamicPropIdKey: string;
}

export interface HostNamingRuleRule {
	id: string;
	type: string;
	nameFormat: string;
	displayName: string;
	enabled: boolean;
	conditions: BuiltinRuleCondition[];
	builtIn: boolean;
}

export interface BuiltinRuleCondition {
	conditionAttributeId: SupportedAttribute;
	negate: boolean;
	comparisonOperator: string;
	value: string;
	caseIgnore: boolean;
}

export interface Metrics {}
