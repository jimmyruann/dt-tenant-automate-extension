import { Paper, Text } from "@mantine/core";
import React from "react";
import { getDynatraceEnvironmentBaseUrl } from "../../shared/utils";
import CSRFWrapper from "./data-display/csrf-wrapper";

interface ContentProps extends React.ComponentPropsWithoutRef<"div"> {
	tab: chrome.tabs.Tab | null;
}

const NoTabs = () => (
	<Paper>
		<Text>Select an environment and run health check.</Text>
	</Paper>
);

export const Content = React.forwardRef<HTMLDivElement, ContentProps>(({ tab, ...props }, ref) => {
	return (
		<div {...props} ref={ref}>
			{!tab || tab.url === undefined || getDynatraceEnvironmentBaseUrl(tab.url!) === null ? <NoTabs /> : <CSRFWrapper baseURL={getDynatraceEnvironmentBaseUrl(tab.url!)!} tab={tab} />}
		</div>
	);
});

export default Content;
