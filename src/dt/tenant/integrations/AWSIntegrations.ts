export interface AWSIntegrations {
	awsConfiguration: AwsConfiguration[];
	awsExternalIdToken: string;
	managedDeployment: boolean;
	forcePrivateCollector: boolean;
}

interface AwsConfiguration {
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

interface MaxAvailableAGVersion {
	major: number;
	minor: number;
	revision: number;
	qualifier: string;
	validVersion: boolean;
}

interface MonitorOnlyTagPair {
	name: string;
	value: string;
}

interface SupportingService {
	serviceShortName: string;
	metrics: Metric[];
}

interface Metric {
	name: string;
	statistic: Statistic;
	dimensions: string[];
}

enum Statistic {
	Average = "AVERAGE",
	Maximum = "MAXIMUM",
	Multi = "MULTI",
	Sum = "SUM",
}
