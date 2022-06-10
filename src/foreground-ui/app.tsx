import { Container, createStyles, MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./components/home";

const useStyles = createStyles((theme) => ({
	main: {
		backgroundColor: theme.colors.gray[0],
		height: "100vh",
	},
}));

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
			refetchIntervalInBackground: false,
		},
	},
});

export const App = () => {
	const { classes } = useStyles();

	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				styles={{
					Paper: (theme) => ({
						root: {
							padding: theme.spacing.md,
							boxShadow: theme.shadows.xs,
						},
					}),
				}}>
				<main className={classes.main}>
					<Container fluid py='md'>
						<Home />
					</Container>
				</main>
			</MantineProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
