export interface ProcessNamingRules {
	rules: HostNamingRuleRule[];
	builtinRules: any[];
	pgEntities: PGEntity[];
	placeholders: Placeholder[];
	supportedAttributes: SupportedAttribute[];
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

interface SupportedAttribute {
	conditionAttribute: string;
	dynamicPropId: string;
	dynamicPropIdKey: string;
}
interface HostNamingRuleRule {
	id: string;
	type: string;
	nameFormat: string;
	displayName: string;
	enabled: boolean;
	conditions: BuiltinRuleCondition[];
	builtIn: boolean;
}

interface Metrics {}

interface BuiltinRuleCondition {
	conditionAttributeId: SupportedAttribute;
	negate: boolean;
	comparisonOperator: string;
	value: string;
	caseIgnore: boolean;
}
