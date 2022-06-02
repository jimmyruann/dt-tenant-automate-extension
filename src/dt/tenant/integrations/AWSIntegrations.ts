export const getApiUrl = () => {
	return "/rest/configuration/virtualization/aws";
};

export interface AWSIntegrations {
	awsConfiguration: AwsConfiguration[];
	awsExternalIdToken: string;
	managedDeployment: boolean;
	forcePrivateCollector: boolean;
}

export interface AwsConfiguration {
	id: string;
	label: string;
	areSupportingServicesSupported: boolean;
	maxAvailableAGVersion: MaxAvailableAGVersion;
	type: string;
	partitionType: string;
	accessKey?: string;
	identifier: string;
	connectionStatus: string;
	credentialsTimeout: number;
	taggedOnly: boolean;
	monitorOnlyTagPairs: MonitorOnlyTagPair[];
	monitorOnlyExcludingTagPairs: any[];
	securityGatewayType: string;
	monitorAwsLogs: boolean;
	sqsArns: any[];
	supportingServices: SupportingService[];
	iamRole?: string;
	accountId?: string;
}

export interface MaxAvailableAGVersion {
	major: number;
	minor: number;
	revision: number;
	qualifier: string;
	validVersion: boolean;
}

export interface MonitorOnlyTagPair {
	name: string;
	value: string;
}

export interface SupportingService {
	serviceShortName: string;
	metrics: Metric[];
}

export interface Metric {
	name: string;
	statistic: Statistic;
	dimensions: string[];
}

export enum Statistic {
	Average = "AVERAGE",
	Maximum = "MAXIMUM",
	Multi = "MULTI",
	Sum = "SUM",
}
