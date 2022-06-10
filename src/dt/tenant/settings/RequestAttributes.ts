export interface RequestAttributes {
	perService: { [key: string]: string[] };
	requestAttributes: RequestAttributeElement[];
	managementZones: ManagementZoneElement[];
	hotSensorPlacementEnabled: boolean;
}

interface ManagementZoneElement {
	name: string;
	id: string;
}

interface RequestAttributeElement {
	name: string;
	id: string;
	enabled: boolean;
	deleted: boolean;
	confidential: boolean;
	dataType: string;
}
