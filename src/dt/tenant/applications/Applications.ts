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

interface BaseEntity {
	settings: Settings;
}

interface Settings {
	bp3ss4: string;
	fe2: string;
	vc2: string;
	bp3: string;
	appCompareTimeframe: string;
	mavg211: string;
	parts: string;
	appTimeframe: string;
}

interface UemApplication {
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
