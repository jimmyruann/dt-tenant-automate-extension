import { Text } from "@mantine/core";
import { useQueries } from "react-query";
import { getDynatraceEnvironmentBaseUrl, getPageWindowVar } from "../../../shared/utils";
import Results from "./results";

interface ResultsProps {
	tab: chrome.tabs.Tab;
	baseURL: string;
}

export const CSRFWrapper = ({ tab, baseURL }: ResultsProps) => {
	const csrfQueries = useQueries([
		{ queryKey: [baseURL, "csrfToken"], queryFn: () => getPageWindowVar<string>("csrf_token", tab.id) },
		{ queryKey: [baseURL, "csrfHeaderName"], queryFn: () => getPageWindowVar<string>("csrf_header_name", tab.id) },
	]);

	const dynatraceBaseURL = getDynatraceEnvironmentBaseUrl(tab.url!) as string;

	if (csrfQueries.some((query) => query.isLoading)) return <div>Loading CSRF</div>;

	if (!csrfQueries[0].data || !csrfQueries[1].data)
		return (
			<div>
				<Text>Something went wrong</Text>
				<Text>
					CSRF Header Name: <b>{csrfQueries[1].data}</b>
				</Text>
				<Text>
					CSRF Token: <b>{csrfQueries[0].data}</b>
				</Text>
			</div>
		);
	return <Results baseURL={dynatraceBaseURL} csrf_token={csrfQueries[0].data} csrf_header_name={csrfQueries[1].data} />;
};

export default CSRFWrapper;
