export const getApiUrl = () => {
	return "/rest/configuration/services/detectionrules/websiterules";
};

export interface ApplicationDetectionRules {
	customRules: CustomRule[];
	beaconDomainWhitelist: boolean;
}

export interface CustomRule {
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
