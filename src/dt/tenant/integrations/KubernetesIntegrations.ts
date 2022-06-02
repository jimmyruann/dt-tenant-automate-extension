export const getApiUrl = () => {
	return "/rest/kubernetes?entitySelector=type(KUBERNETES_CLUSTER)&loadInactiveEntities=false&gtf=l_30_DAYS";
};

export interface KubernetesIntegrations {
	entities: Entity[];
	totalEntitiesCount: number;
	affectedEntityIds: any[];
	technologyMonitoringStatus: string;
	activeGateStatus: string;
	hasAnyEntities: boolean;
	clustersNotLastSeenCount: number;
	configuredClustersNotLastSeenCount: number;
	affectedEntitiesCount: number;
	topXEntitiesCount: number;
	filterConfig: FilterConfig;
	cgStoringEnabled: boolean;
}

export interface Entity {
	customChartingTimeseriesColumnValues: CustomChartingTimeseriesColumnValues;
	available: boolean;
	id: string;
	lastSeen: number;
	name: string;
	nodeWithProblemCount: number;
	namespaceCount: number;
	monitoringStatus: string;
	openShift: boolean;
	active: boolean;
	affected: boolean;
	availabilityState: string;
	maxCores?: number;
	memoryRequested?: number;
	memoryMax?: number;
	nodeCount?: number;
	workloadCount?: number;
}

export interface CustomChartingTimeseriesColumnValues {
	data: Data;
}

export interface Data {}

export interface FilterConfig {
	listSortType: string;
	listFiltersPerMEIndex: ListFiltersPerMEIndex[];
	unsupportedFilters: any[];
	allowedToEditFilter: boolean;
}

export interface ListFiltersPerMEIndex {
	indexEntityType: string;
	filterItems: any[];
}
