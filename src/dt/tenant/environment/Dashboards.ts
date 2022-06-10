export interface Dashboards {
	dashboards: Dashboard[];
	tags: string[];
	owners: string[];
}

interface Dashboard {
	id: string;
	name: string;
	owner: string;
	lastModified: number;
	timeframe: string;
	managementZoneId: string;
	editable: boolean;
	shareMode: string[];
	tags: string[];
	userFavorite: boolean;
	preset: boolean;
	popularity: number;
	userStashed: boolean;
	dashboardSource?: number;
	sharedWithAuthenticatedUsers: boolean;
	reportSubscriptions?: any[];
	unifiedTechnologyType?: string;
}
