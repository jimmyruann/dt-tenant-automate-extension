export const getApiUrl = () => {
	return "/rest/configuration/serviceMetrics";
};

export interface CalcServiceMetrics {
	metrics: CalcServiceMetricMetric[];
	topXLimit: number;
	serviceLimit: number;
	placeholderLimit: number;
}

export interface CalcServiceMetricMetric {
	name: string;
	id: string;
	tsmMetricKey: string;
	enabled: boolean;
}
