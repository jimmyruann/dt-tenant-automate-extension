import { Paper, Table } from "@mantine/core";
import React from "react";
import TabRow from "./tab-row";
import { TabTableProvider } from "./tab-table.context";

interface TabTableProps extends React.ComponentPropsWithoutRef<"table"> {
	tabs: chrome.tabs.Tab[];
	useCurrentTab: () => [chrome.tabs.Tab | null, (currentTab: chrome.tabs.Tab) => void];
}

export const TabTable = React.forwardRef<typeof Table, TabTableProps>(({ tabs, useCurrentTab, ...props }, ref) => (
	<Paper>
		<TabTableProvider useCurrentTab={useCurrentTab}>
			<Table {...props}>
				<thead>
					<tr>
						<th>Tab ID</th>
						<th>URL</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{tabs.map((tab, i) => (
						<TabRow tab={tab} key={tab.id !== undefined ? tab.id : i} />
					))}
				</tbody>
			</Table>
		</TabTableProvider>
	</Paper>
));

export default TabTable;
