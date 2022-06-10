import axios, { AxiosInstance } from "axios";
import { ApplicationBasicSettings } from "./applications/ApplicationBasicSettings";
import { ApplicationConversionGoals } from "./applications/ApplicationConversionGoals";
import { Applications } from "./applications/Applications";
import { ApplicationSessionProperties } from "./applications/ApplicationSessionProperties";
import {
	ApplicationUserCustomActionRules,
	ApplicationUserLoadActionRules,
	ApplicationUserXHRActionRules,
} from "./applications/ApplicationUserActionRules";
import { ApplicationUserActions } from "./applications/ApplicationUserActions";
import { ApplicationUserTags } from "./applications/ApplicationUserTags";
import { Dashboards } from "./environment/Dashboards";
import { MultidimensionalCharts } from "./environment/MultidimensionalCharts";
import { SLO } from "./environment/SLO";
import { Synthetic } from "./environment/Synthetics";
import { AWSIntegrations } from "./integrations/AWSIntegrations";
import { AzureIntegrations } from "./integrations/AzureIntegrations";
import { KubernetesIntegrations } from "./integrations/KubernetesIntegrations";
import { VMWareIntegrations } from "./integrations/VMWareIntegrations";
import { AlertingProfiles } from "./settings/AlertingProfiles";
import { ApplicationDetectionRules } from "./settings/ApplicationDetectionRules";
import { AutoTaggingRules } from "./settings/AutoTaggingRules";
import { CalcServiceMetrics } from "./settings/CalcServiceMetrics";
import { Extensions } from "./settings/Extensions";
import { HostNamingRules } from "./settings/HostNamingRules";
import { ManagementZones } from "./settings/ManagementZones";
import { ManualTaggingRules } from "./settings/ManualTaggingRules";
import { MonitoringOverview } from "./settings/MonitoringOverview";
import { ProblemIntegrations } from "./settings/ProblemIntegrations";
import { ProcessNamingRules } from "./settings/ProcessNamingRules";
import { RequestAttributes } from "./settings/RequestAttributes";
import { RequestNamingRules } from "./settings/RequestNamingRules";
import { ServiceNamingRules } from "./settings/ServiceNamingRules";

export class DTApi {
	private axiosClient: AxiosInstance;

	constructor(baseURL: string, csrf_token: string, csrf_header_name: string) {
		this.axiosClient = axios.create({
			baseURL,
			headers: {
				[csrf_header_name]: csrf_token,
			},
		});
	}

	// Settings
	async AlertingProfiles() {
		const { data } = await this.axiosClient.get<AlertingProfiles>(
			"/rest/v2/settings/persistence/builtin:alerting.profile/tenant/tenant?inheritedOnly=false&includeValues=true&includeSummaries=true",
		);
		return {
			AlertingProfiles: data.totalCount,
		};
	}

	async ApplicationDetectionRules() {
		const { data } = await this.axiosClient.get<ApplicationDetectionRules>(
			"/rest/configuration/services/detectionrules/websiterules",
		);
		return {
			ApplicationDetectionRules: data.customRules.length,
		};
	}

	async AutoTaggingRules() {
		const { data } = await this.axiosClient.get<AutoTaggingRules>("/rest/configuration/autotagging");
		return {
			AutoTaggingRules: data.items.length,
		};
	}

	async CalcServiceMetrics() {
		const { data } = await this.axiosClient.get<CalcServiceMetrics>("/rest/configuration/serviceMetrics");
		return {
			CalcServiceMetrics: data.metrics.length,
		};
	}

	async Extensions() {
		const { data } = await this.axiosClient.get<Extensions>("/rest/configuration/monitoringextensions");
		return {
			Extensions: data.list.filter((extension) => extension.extensionId.startsWith("custom")).length,
		};
	}

	async HostNamingRules() {
		const { data } = await this.axiosClient.get<HostNamingRules>(
			"/rest/configuration/conditionalnaming?ruletype=HOST",
		);
		return {
			HostNamingRules: data.rules.length,
			HostGroups: data.pgEntities.length,
		};
	}

	async ManagementZones() {
		const { data } = await this.axiosClient.get<ManagementZones>("/rest/configuration/managedzones");
		return {
			ManagementZones: data.items.length,
		};
	}

	async ManualTaggingRules() {
		const { data } = await this.axiosClient.get<ManualTaggingRules>("/rest/configuration/tagging");
		return {
			ManualTaggingRules: data.tags.length,
		};
	}

	async MonitoringOverview() {
		const { data } = await this.axiosClient.get<MonitoringOverview>(`/rest/configuration/deployment/summary`);
		return {
			Hosts: data.totalHostCount,
			ProcessesGroups: data.totalProcessCount,
			Applications: data.totalApplicationCount,
		};
	}

	async ProblemIntegrations() {
		const { data } = await this.axiosClient.get<ProblemIntegrations>(
			"/rest/v2/settings/persistence/builtin:problem.notifications/tenant/tenant?inheritedOnly=false&includeValues=true&includeSummaries=true",
		);
		return {
			ProblemIntegrations: data.totalCount,
		};
	}

	async ProcessNamingRules() {
		const { data } = await this.axiosClient.get<ProcessNamingRules>(
			"/rest/configuration/conditionalnaming?ruletype=PROCESS_GROUP",
		);
		return {
			ProcessNamingRules: data.rules.length,
		};
	}

	async RequestAttributes() {
		const { data } = await this.axiosClient.get<RequestAttributes>("/rest/configuration/requestattributes");
		return {
			RequestAttributes: data.requestAttributes.length,
		};
	}

	async RequestNamingRules() {
		const { data } = await this.axiosClient.get<RequestNamingRules>("/rest/configuration/requestNaming");
		return { RequestNamingRules: (data.list && data.list.length) || 0 };
	}

	async ServiceNamingRules() {
		const { data } = await this.axiosClient.get<ServiceNamingRules>(
			"/rest/configuration/conditionalnaming?ruletype=SERVICE",
		);
		return { ServiceNamingRules: data.rules.length };
	}

	// Integration
	async AWSIntegrations() {
		const { data } = await this.axiosClient.get<AWSIntegrations>("/rest/configuration/virtualization/aws");
		return {
			AWSIntegrations: data.awsConfiguration.length,
		};
	}

	async AzureIntegrations() {
		const { data } = await this.axiosClient.get<AzureIntegrations>("/rest/configuration/virtualization/azure");
		return {
			AzureIntegrations: data.list.length,
		};
	}

	async KubernetesIntegrations() {
		const { data } = await this.axiosClient.get<KubernetesIntegrations>(
			"/rest/kubernetes?entitySelector=type(KUBERNETES_CLUSTER)&loadInactiveEntities=false&gtf=l_30_DAYS",
		);
		return {
			KubernetesIntegrations: data.totalEntitiesCount,
		};
	}

	async VMWareIntegrations() {
		const { data } = await this.axiosClient.get<VMWareIntegrations>("/rest/configuration/virtualization/vcenter");
		return {
			VMWareIntegrations: data.list.length,
		};
	}

	// Environment
	async MultidimensionalCharts() {
		const { data } = await this.axiosClient.get<MultidimensionalCharts>("/rest/mda2bookmarks/list?gtf=l_30_DAYS");
		return {
			MultidimensionalCharts: data.length,
		};
	}

	async SLO() {
		const { data } = await this.axiosClient.get<SLO>(
			"/rest/v2/slo?timeFrame=CURRENT&pageSize=10&isUiRequest=true&pageIdx=1&sort=name&evaluate=true",
		);
		return {
			SLOs: data.totalCount,
		};
	}

	async Synthetics() {
		const { data } = await this.axiosClient.get<Synthetic>("/rest/syntheticmonitor/monitorloc?gf=all");
		const countBrowser = data.webcheckList.filter((each) => each.webcheckType.type === "AVAILABILITY").length;
		return {
			Synthetic: data.allTestsCount,
			SyntheticHTTP: data.httpcheckList.length,
			SyntheticBrowser: countBrowser,
			SyntheticBrowserClickPath: data.webcheckList.length - countBrowser,
		};
	}

	async Dashboards() {
		const { data } = await this.axiosClient.get<Dashboards>("/rest/dashboards/list?admin=true&gtf=l_30_DAYS");
		return {
			Dashboards: data.dashboards.length,
		};
	}

	// Application
	async Applications() {
		const applications = await this.axiosClient.get<Applications>(
			"/rest/uemapplications?parts=main%2Chealth-ts%2Chealth-od&timeframe=last2h&gtf=l_30_DAYS&gf=all",
		);

		const result = {
			UserTaggingRules: 0,
			ConversionGoals: 0,
			UserActionNamingRulesXHR: 0,
			UserActionNamingRulesCustom: 0,
			UserActionNamingRulesLoad: 0,
			KeyUserActions: 0,
			SessionProperties: 0,
			SessionReplay: 0,
		};

		const webAppPromises = await Promise.all(
			applications.data.uemApplications
				.filter((application) => application.serviceType.toLowerCase() === "website")
				.map((application) => {
					const app = new WebApplication(application.id, this.axiosClient);
					return Promise.all([
						app.UserTaggingRules(),
						app.ConversionGoals(),
						app.XHRUserActionNamingRules(),
						app.CustomUserActionNamingRules(),
						app.LoadUserActionNamingRules(),
						app.KeyUserActions(),
						app.SessionProperties(),
						app.SessionReplay(),
					]);
				}),
		);

		console.log(webAppPromises);

		webAppPromises.map((applicationPromises) => {
			result.UserTaggingRules += applicationPromises[0].UserTaggingRules;
			result.ConversionGoals += applicationPromises[1].ConversionGoals;
			result.UserActionNamingRulesXHR += applicationPromises[2].XHRUserActionNamingRules;
			result.UserActionNamingRulesCustom += applicationPromises[3].CustomUserActionNamingRules;
			result.UserActionNamingRulesLoad += applicationPromises[4].LoadUserActionNamingRules;
			result.KeyUserActions += applicationPromises[5].KeyUserActions;
			result.SessionProperties += applicationPromises[6].SessionProperties;
			if (applicationPromises[7].SessionReplay) result.SessionReplay++;
		});

		return result;
	}
}

class WebApplication {
	private applicationId: string;
	private axiosClient: AxiosInstance;

	constructor(applicationId: string, axiosClient: AxiosInstance) {
		this.applicationId = applicationId;
		this.axiosClient = axiosClient;
	}

	async UserTaggingRules() {
		const { data } = await this.axiosClient.get<ApplicationUserTags>(
			`/rest/configshared/uemusertag/appId/${this.applicationId}`,
		);
		return { UserTaggingRules: data.list.length };
	}

	async ConversionGoals() {
		const { data } = await this.axiosClient.get<ApplicationConversionGoals>(
			`/rest/configshared/appconversiongoals/appId/${this.applicationId}`,
		);
		return {
			ConversionGoals: data.list.length,
		};
	}

	async XHRUserActionNamingRules() {
		const { data } = await this.axiosClient.get<ApplicationUserXHRActionRules>(
			`/rest/configshared/appnamingrulesxhr/appId/${this.applicationId}`,
		);
		return {
			XHRUserActionNamingRules: data.totalRulesCount,
		};
	}

	async CustomUserActionNamingRules() {
		const { data } = await this.axiosClient.get<ApplicationUserCustomActionRules>(
			`/rest/configshared/appnamingrulescustom/appId/${this.applicationId}`,
		);
		return {
			CustomUserActionNamingRules: data.totalRulesCount,
		};
	}

	async LoadUserActionNamingRules() {
		const { data } = await this.axiosClient.get<ApplicationUserLoadActionRules>(
			`/rest/configshared/appnamingrulesload/appId/${this.applicationId}`,
		);
		return {
			LoadUserActionNamingRules: data.totalRulesCount,
		};
	}

	async KeyUserActions() {
		const { data } = await this.axiosClient.get<ApplicationUserActions>(
			`/rest/uemshareddetails/overviewdata/performanalysis/${this.applicationId}?parts=buseractkey%2Cbuseractn&gtf=l_30_DAYS`,
		);

		let KeyUserActions = 0;

		if (data && data.userActions2 && data.userActions2.result && data.userActions2.result.realtimeUserActions) {
			KeyUserActions = data.userActions2.result.realtimeUserActions.length;
		}

		return {
			KeyUserActions,
		};
	}

	async SessionProperties() {
		const { data } = await this.axiosClient.get<ApplicationSessionProperties>(
			`/rest/configshared/uemsessionuseractionproperties/appId/${this.applicationId}`,
		);
		return {
			SessionProperties: data.list.length,
		};
	}

	async SessionReplay() {
		const { data } = await this.axiosClient.get<ApplicationBasicSettings>(
			`/rest/v2/settings/persistence/builtin:rum.web.enablement/${this.applicationId.replace(
				"-",
				"/",
			)}?includeValues=true`,
		);

		if (data.settings && data.settings.length) {
			return {
				SessionReplay: data.settings[0].value.sessionReplay.enabled,
			};
		}

		return {
			SessionReplay: false,
		};
	}
}

class MobileApplication {
	private applicationId: string;

	constructor(applicationId: string, axiosClient: AxiosInstance) {
		this.applicationId = applicationId;
	}
}

export default DTApi;
