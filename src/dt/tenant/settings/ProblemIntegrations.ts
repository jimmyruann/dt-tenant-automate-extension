export interface ProblemIntegrations {
	totalCount: number;
	settings: ProblemIntegrationSetting[];
	readOnly: boolean;
	modified: number;
	author: string;
}

interface ProblemIntegrationSetting {
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

interface FluffyValue {
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

interface JiraNotification {
	url: string;
	username: string;
	apiToken: string;
	projectKey: string;
	issueType: string;
	summary: string;
	description: string;
}

interface PagerDutyNotification {
	account: string;
	serviceName: string;
	serviceApiKey: string;
}

interface ServiceNowNotification {
	instanceName: string;
	username: string;
	password: string;
	message: string;
	sendIncidents: boolean;
	sendEvents: boolean;
}

interface SlackNotification {
	url: string;
	channel: string;
	message: string;
}

interface WebHookNotification {
	url: string;
	acceptAnyCertificate: boolean;
	notifyEventMergesEnabled: boolean;
	notifyClosedProblems: boolean;
	headers: Header[];
	payload: string;
}

interface Header {
	name: string;
	secret: boolean;
	value: string;
}

interface XMattersNotification {
	url: string;
	acceptAnyCertificate: boolean;
	headers: any[];
	payload: string;
}

interface ModificationInfo {
	deletable: boolean;
	modifiable: boolean;
	movable: boolean;
	first: boolean;
	modifiablePaths: any[];
}
