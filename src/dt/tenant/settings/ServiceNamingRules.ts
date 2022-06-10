export interface ServiceNamingRules {
	rules: ServiceNamingRuleRule[];
	builtinRules: BuiltinRule[];
	pgEntities: PGEntity[];
	placeholders: Placeholder[];
	supportedAttributes: SupportedAttribute[];
}

interface BuiltinRule {
	id: string;
	type: string;
	nameFormat: string;
	enabled: boolean;
	conditions: BuiltinRuleCondition[];
	builtIn: boolean;
	builtInKey: string;
}

interface ServiceNamingRuleRule {
	id: string;
	type: string;
	nameFormat: string;
	displayName: string;
	enabled: boolean;
	conditions: PurpleCondition[];
	builtIn: boolean;
}

interface PurpleCondition {
	conditionAttributeId: SupportedAttribute;
	negate: boolean;
	comparisonOperator: string;
	value: string;
	caseIgnore: boolean;
	tagValue?: TagValue;
}

interface PGEntity {
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

interface Placeholder {
	conditionAttributeId: SupportedAttribute;
	placeholder: string;
}

interface Metrics {}

interface SupportedAttribute {
	conditionAttribute: string;
	dynamicPropId: string;
	dynamicPropIdKey: string;
}

interface BuiltinRuleCondition {
	conditionAttributeId: SupportedAttribute;
	negate: boolean;
	comparisonOperator: string;
	value: string;
	caseIgnore: boolean;
}

interface TagValue {
	context: string;
	key: string;
	value: string;
}
