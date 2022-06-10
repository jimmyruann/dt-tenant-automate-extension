export interface ApplicationDetectionRules {
	customRules: CustomRule[];
	beaconDomainWhitelist: boolean;
}

interface CustomRule {
	id: string;
	name: string;
	uri: string;
	applicationId: string;
	applicationInternalName: string;
	matchType: string;
	matchTarget: string;
	ruleType: string;
	infoRumEnabled: boolean;
}
