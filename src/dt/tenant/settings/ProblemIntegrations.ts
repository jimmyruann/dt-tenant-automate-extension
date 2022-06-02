export const getApiUrl = () => {
	return "/rest/v2/settings/persistence/builtin:problem.notifications/tenant/tenant?inheritedOnly=false&includeValues=true&includeSummaries=true";
};

export interface ProblemIntegrations {
	totalCount: number;
	settings: ProblemIntegrationSetting[];
	readOnly: boolean;
	modified: number;
	author: string;
}

export interface ProblemIntegrationSetting {
	creationTimestamp: number;
	revision: number;
	name: string;
	origin: string;
	version: string;
	author: string;
	key: string;
	updateToken: string;
	value: FluffyValue;
	summary: string;
	readOnly: boolean;
	modificationInfo: ModificationInfo;
}

export interface FluffyValue {
	enabled: boolean;
	type: string;
	displayName: string;
	slackNotification?: SlackNotification;
	alertingProfile: string;
	webHookNotification?: WebHookNotification;
	xMattersNotification?: XMattersNotification;
	pagerDutyNotification?: PagerDutyNotification;
	jiraNotification?: JiraNotification;
	serviceNowNotification?: ServiceNowNotification;
}

export interface JiraNotification {
	url: string;
	username: string;
	apiToken: string;
	projectKey: string;
	issueType: string;
	summary: string;
	description: string;
}

export interface PagerDutyNotification {
	account: string;
	serviceName: string;
	serviceApiKey: string;
}

export interface ServiceNowNotification {
	instanceName: string;
	username: string;
	password: string;
	message: string;
	sendIncidents: boolean;
	sendEvents: boolean;
}

export interface SlackNotification {
	url: string;
	channel: string;
	message: string;
}

export interface WebHookNotification {
	url: string;
	acceptAnyCertificate: boolean;
	notifyEventMergesEnabled: boolean;
	notifyClosedProblems: boolean;
	headers: Header[];
	payload: string;
}

export interface Header {
	name: string;
	secret: boolean;
	value: string;
}

export interface XMattersNotification {
	url: string;
	acceptAnyCertificate: boolean;
	headers: any[];
	payload: string;
}

export interface ModificationInfo {
	deletable: boolean;
	modifiable: boolean;
	movable: boolean;
	first: boolean;
	modifiablePaths: any[];
}
