export interface VMWareIntegrations {
	list: VMWareIntegration[];
}

interface VMWareIntegration {
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
