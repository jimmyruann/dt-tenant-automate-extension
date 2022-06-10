import React from "react";

interface TabTableContextProps {
	useCurrentTab: () => [chrome.tabs.Tab | null, (currentTab: chrome.tabs.Tab) => void];
}

interface TabTableProviderProps extends TabTableContextProps {
	children: React.ReactNode;
}

const TabTableContext = React.createContext<TabTableContextProps>({} as TabTableContextProps);

export const TabTableProvider = ({ useCurrentTab, children }: TabTableProviderProps) => {
	return <TabTableContext.Provider value={{ useCurrentTab }}>{children}</TabTableContext.Provider>;
};

export const useTableContext = () => React.useContext(TabTableContext);
