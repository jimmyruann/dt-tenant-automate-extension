export const getApiUrl = () => {
	return `/rest/configuration/deployment/summary`;
};

export interface MonitoringOverview {
	totalApplicationCount: number;
	totalHostCount: number;
	totalProcessCount: number;
}
