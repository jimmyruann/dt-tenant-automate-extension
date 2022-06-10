export interface Synthetic {
	visuallyComplete2Enabled: boolean;
	webcheckList: WebcheckList[];
	httpcheckList: HttpcheckList[];
	extTestsList: any[];
	allTestsCount: number;
	maxTests: number;
	trial: boolean;
	queriedAvailability: boolean;
	availabilityQueryMonitorLimit: number;
}

interface HttpcheckList {
	id: string;
	deviceProfile: string;
	webcheckType: WebcheckType;
	frequency: number;
	lastSeen: number;
	locations: Location[];
	applications: ManagementZoneElement[];
	responseTime: number;
	availability: number;
	eventTypeIndicator: string;
	nrOfAffectedLocations: number;
	autoTags: Record<string, any[]>;
	creationTimestamp: number;
	stepsNo: number;
	stateNormal: boolean;
	credentialsOwners: any[];
	credentialsNames: any[];
	recorded: boolean;
	locationCount: number;
	name: string;
	active: boolean;
}

interface WebcheckList {
	id: string;
	deviceProfile: string;
	webcheckType: WebcheckType;
	frequency: number;
	lastSeen: number;
	locations: Location[];
	applications: ManagementZoneElement[];
	responseTime: number;
	availability: number;
	eventTypeIndicator: string;
	nrOfAffectedLocations: number;
	autoTags: Record<string, any[]>;
	creationTimestamp: number;
	stepsNo: number;
	stateNormal: boolean;
	credentialsOwners: any[];
	thumbnailImageUrl: string;
	credentialsNames: any[];
	recorded: boolean;
	locationCount: number;
	name: string;
	active: boolean;
}

interface ManagementZoneElement {
	name: string;
	id: string;
}

interface WebcheckType {
	type: string;
}
