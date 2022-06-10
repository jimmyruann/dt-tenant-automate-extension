import { Button } from "@mantine/core";
import { useTableContext } from "./tab-table.context";

interface TabRowControlProps {
	tab: chrome.tabs.Tab;
}

export const TabRowControl = ({ tab }: TabRowControlProps) => {
	const tableContext = useTableContext();
	const [currentTab, setCurrentTab] = tableContext.useCurrentTab();

	const handleOnClick = () => {
		setCurrentTab(tab);
	};

	const disableButton = !!currentTab && currentTab.id === tab.id;

	return (
		<Button color='teal' onClick={handleOnClick} disabled={disableButton}>
			Run Check
		</Button>
	);
};

export default TabRowControl;
