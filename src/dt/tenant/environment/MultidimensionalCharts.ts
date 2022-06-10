export type MultidimensionalCharts = MultidimensionalChart[];

interface MultidimensionalChart {
	configName: string;
	configId: string;
	metric: string;
	dimension: string;
	aggregation: string;
	visualizationType: string;
	owner: string;
	readOnly: boolean;
	updateTimestamp: number;
	mergeServices: boolean;
	serviceFilter: string;
	includedToAllManagementZones: boolean;
	builtIn: boolean;
	percentile?: number;
}
