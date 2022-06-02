export const getApiUrl = () => {
	return "/rest/configuration/virtualization/vcenter";
};

export interface VMWareIntegrations {
	list: VMWareIntegrations[];
}

export interface VMWareIntegrations {
	id: string;
	hostName: string;
	userName: string;
	info: string;
	standaloneEsxi: boolean;
	available: boolean;
	credentialsTimeout: number;
	amountOfMonitoredHosts: number;
	amountOfHosts: number;
}
