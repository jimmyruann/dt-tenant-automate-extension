import React from "react";
import TabRowControl from "./tab-row-control";

interface TabRowProps extends React.ComponentPropsWithoutRef<"tr"> {
	tab: chrome.tabs.Tab;
}

export const TabRow = React.forwardRef<HTMLTableRowElement, TabRowProps>(({ tab, ...props }, ref) => {
	const url = new URL(tab.url!);

	return (
		<tr {...props} ref={ref}>
			<td>{tab.id}</td>
			<td>{url.origin}</td>
			<td>
				<TabRowControl tab={tab} />
			</td>
		</tr>
	);
});

export default TabRow;
