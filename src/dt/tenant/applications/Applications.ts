export const getApiUrl = () => {
	return "/rest/uemapplications?parts=main%2Chealth-ts%2Chealth-od&timeframe=last2h&gtf=l_30_DAYS&gf=all";
};

export interface Applications {
	dcrumApplications: any[];
	unmonitoredApplications: any[];
	monitoredSize: number;
	unmonitoredSize: number;
	webApplicationsNowSize: number;
	mobileApplicationsNowSize: number;
	customApplicationsNowSize: number;
	dcrumApplicationsNowSize: number;
	baseEntity: BaseEntity;
	uemApplications: UemApplication[];
}

export interface BaseEntity {
	settings: Settings;
}

export interface Settings {
	bp3ss4: string;
	fe2: string;
	vc2: string;
	bp3: string;
	appCompareTimeframe: string;
	mavg211: string;
	parts: string;
	appTimeframe: string;
}

export interface UemApplication {
	name: string;
	id: string;
	serviceType: string;
	metrics: { [key: string]: number };
	comparisonMetrics?: { [key: string]: number };
	ruleAppliedPattern?: string;
	ruleAppliedMatchType?: string;
	applicationMatchTarget?: string;
	applicationType?: string;
	uemEnabled: boolean;
	dataStatus: string;
	listFilterApplicationType: string;
	loadKpmIdentifier?: string;
	xhrKpmIdentifier?: string;
	unavailableDuration: number;
	lastSeen: number;
	available: boolean;
	autoTags?: Record<string, any[]>;
	lastSeenMillisAgo?: number;
	iot?: boolean;
	iconType?: string;
	android?: boolean;
	windows?: boolean;
	otherPlatform?: boolean;
	ios?: boolean;
}
