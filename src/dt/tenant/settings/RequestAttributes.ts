export const getApiUrl = () => {
	return "/rest/configuration/requestattributes";
};

export interface RequestAttributes {
	perService: { [key: string]: string[] };
	requestAttributes: RequestAttributeElement[];
	managementZones: ManagementZoneElement[];
	hotSensorPlacementEnabled: boolean;
}

export interface ManagementZoneElement {
	name: string;
	id: string;
}

export interface RequestAttributeElement {
	name: string;
	id: string;
	enabled: boolean;
	deleted: boolean;
	confidential: boolean;
	dataType: string;
}
