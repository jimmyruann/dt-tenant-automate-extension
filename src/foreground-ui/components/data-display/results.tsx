import { Grid } from "@mantine/core";
import { useQueries } from "react-query";
import DTApi from "../../../dt/tenant";
import DataTable from "./data-table";

interface ResultsProps {
	baseURL: string;
	csrf_token: string;
	csrf_header_name: string;
}

export const Results = ({ baseURL, csrf_token, csrf_header_name }: ResultsProps) => {
	const DtApiClient = new DTApi(baseURL, csrf_token, csrf_header_name);

	const settingQueries = useQueries([
		{ queryKey: [baseURL, "AlertingProfiles"], queryFn: () => DtApiClient.AlertingProfiles() },
		{ queryKey: [baseURL, "ApplicationDetectionRules"], queryFn: () => DtApiClient.ApplicationDetectionRules() },
		{ queryKey: [baseURL, "AutoTaggingRules"], queryFn: () => DtApiClient.AutoTaggingRules() },
		{ queryKey: [baseURL, "CalcServiceMetrics"], queryFn: () => DtApiClient.CalcServiceMetrics() },
		{ queryKey: [baseURL, "Extensions"], queryFn: () => DtApiClient.Extensions() },
		{ queryKey: [baseURL, "HostNamingRules"], queryFn: () => DtApiClient.HostNamingRules() },
		{ queryKey: [baseURL, "ManagementZones"], queryFn: () => DtApiClient.ManagementZones() },
		{ queryKey: [baseURL, "ManualTaggingRules"], queryFn: () => DtApiClient.ManualTaggingRules() },
		{ queryKey: [baseURL, "MonitoringOverview"], queryFn: () => DtApiClient.MonitoringOverview() },
		{ queryKey: [baseURL, "ProblemIntegrations"], queryFn: () => DtApiClient.ProblemIntegrations() },
		{ queryKey: [baseURL, "ProcessNamingRules"], queryFn: () => DtApiClient.ProcessNamingRules() },
		{ queryKey: [baseURL, "RequestAttributes"], queryFn: () => DtApiClient.RequestAttributes() },
		{ queryKey: [baseURL, "RequestNamingRules"], queryFn: () => DtApiClient.RequestNamingRules() },
		{ queryKey: [baseURL, "ServiceNamingRules"], queryFn: () => DtApiClient.ServiceNamingRules() },
	]);

	const integrationQueries = useQueries([
		{ queryKey: [baseURL, "AWSIntegrations"], queryFn: () => DtApiClient.AWSIntegrations() },
		{ queryKey: [baseURL, "AzureIntegrations"], queryFn: () => DtApiClient.AzureIntegrations() },
		{ queryKey: [baseURL, "KubernetesIntegrations"], queryFn: () => DtApiClient.KubernetesIntegrations() },
		{ queryKey: [baseURL, "VMWareIntegrations"], queryFn: () => DtApiClient.VMWareIntegrations() },
	]);

	const environmentQueries = useQueries([
		{ queryKey: [baseURL, "MultidimensionalCharts"], queryFn: () => DtApiClient.MultidimensionalCharts() },
		{ queryKey: [baseURL, "SLO"], queryFn: () => DtApiClient.SLO() },
		{ queryKey: [baseURL, "Synthetics"], queryFn: () => DtApiClient.Synthetics() },
	]);

	const applicationQueries = useQueries([
		{ queryKey: [baseURL, "Applications"], queryFn: () => DtApiClient.Applications() },
	]);

	const settingIsLoading = settingQueries.some(({ isLoading }) => isLoading);
	const integrationIsLoading = integrationQueries.some(({ isLoading }) => isLoading);
	const environmentIsLoading = environmentQueries.some(({ isLoading }) => isLoading);
	const applicationIsLoading = applicationQueries.some(({ isLoading }) => isLoading);

	return (
		<Grid grow gutter='lg'>
			<Grid.Col span={3}>
				<DataTable
					isLoading={settingIsLoading}
					data={settingQueries.map(({ data }) => data)}
					colName={["Setting", "Value"]}
				/>
			</Grid.Col>
			<Grid.Col span={3}>
				<DataTable
					isLoading={integrationIsLoading}
					data={integrationQueries.map(({ data }) => data)}
					colName={["Integration", "Value"]}
				/>
			</Grid.Col>
			<Grid.Col span={3}>
				<DataTable
					isLoading={environmentIsLoading}
					data={environmentQueries.map(({ data }) => data)}
					colName={["Environment", "Value"]}
				/>
			</Grid.Col>
			<Grid.Col span={3}>
				<DataTable
					isLoading={applicationIsLoading}
					data={applicationQueries.map(({ data }) => data)}
					colName={["Application", "Value"]}
				/>
			</Grid.Col>
		</Grid>
	);
};

export default Results;
