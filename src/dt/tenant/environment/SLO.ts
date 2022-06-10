export interface SLO {
	totalCount: number;
	pageSize: number;
	nextPageKey: string;
	slo: SloElement[];
}

interface SloElement {
	id: string;
	enabled: boolean;
	name: string;
	description: string;
	evaluatedPercentage: number;
	errorBudget: number;
	status: string;
	error: string;
	metricExpression: string;
	target: number;
	warning: number;
	evaluationType: string;
	timeframe: string;
	filter: string;
	relatedOpenProblems: number;
	hasAccess: boolean;
	filteredMetricExpression: string;
	relatedTotalProblems: number;
	denominatorValue: number;
	metricNumerator: string;
	metricRate: string;
	useRateMetric: boolean;
	metricDenominator: string;
	numeratorValue: number;
}
