export interface ManagementZones {
	items: ManagementZoneItem[];
}

interface ManagementZoneItem {
	name: string;
	id: string;
	description?: string;
	count: number;
}
