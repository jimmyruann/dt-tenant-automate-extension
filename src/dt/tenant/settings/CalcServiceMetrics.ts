export interface CalcServiceMetrics {
	metrics: CalcServiceMetricMetric[];
	topXLimit: number;
	serviceLimit: number;
	placeholderLimit: number;
}

interface CalcServiceMetricMetric {
	name: string;
	id: string;
	tsmMetricKey: string;
	enabled: boolean;
}
