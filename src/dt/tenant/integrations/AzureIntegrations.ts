export const getApiUrl = () => {
	return "/rest/configuration/virtualization/azure";
};

export interface AzureIntegrations {
	list: AzureIntegrationList[];
	managedDeployment: boolean;
}

export interface AzureIntegrationList {
	id: string;
	label: string;
	areSupportingServicesSupported: boolean;
	maxAvailableAGVersion: MaxAvailableAGVersion;
	applicationId: string;
	directoryId: string;
	key: string;
	active: boolean;
	connectionStatus: string;
	credentialsTimeout: number;
	liftr: boolean;
	autoTagging: boolean;
	monitorOnlyTaggedEntities: boolean;
	monitorOnlyTagPairs: any[];
	monitorOnlyExcludingTagPairs: any[];
	supportingServices: SupportingService[];
}

export interface MaxAvailableAGVersion {
	major: number;
	minor: number;
	revision: number;
	qualifier: string;
	validVersion: boolean;
}

export interface SupportingService {
	serviceShortName: string;
	metrics: Metric[];
}

export interface Metric {
	name: string;
	dimensions: string[];
}
