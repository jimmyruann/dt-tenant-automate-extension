import { Space } from "@mantine/core";
import { useEffect, useState } from "react";
import { isDynatraceURL } from "../../shared/utils";
import Content from "./content";
import { TabTable } from "./tab-table";

export const Home = () => {
	const [dynatraceTabs, setDynatraceTabs] = useState<chrome.tabs.Tab[]>([]);
	const [currentTab, setCurrentTab] = useState<chrome.tabs.Tab | null>(null);

	useEffect(() => {
		const getTabs = async () => {
			const tabs = await chrome.tabs.query({
				url: ["https://*.live.dynatrace.com/*", "https://*.dynalabs.io/*", "https://*.sprint.dynatracelabs.com/*", "https://*.dev.dynatracelabs.com/*"],
			});

			setDynatraceTabs(
				tabs.filter((tab) => {
					return tab.url && isDynatraceURL(tab.url);
				}),
			);
		};

		getTabs();
	}, []);

	return (
		<div>
			<TabTable tabs={dynatraceTabs} useCurrentTab={() => [currentTab, setCurrentTab]} />
			<Space h='md' />
			<Content tab={currentTab} />
		</div>
	);
};

export default Home;
