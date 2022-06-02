export const getApiUrl = () => {
	return "/rest/configuration/managedzones";
};

export interface ManagementZones {
	items: ManagementZoneItem[];
}

export interface ManagementZoneItem {
	name: string;
	id: string;
	description?: string;
	count: number;
}
