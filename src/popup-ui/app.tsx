import { createStyles, MantineProvider } from "@mantine/core";
import Home from "./components/home";

const useStyles = createStyles((theme) => ({
	app: {
		width: 300,
		height: 350,
	},
}));

export const App = () => {
	const { classes } = useStyles();
	return (
		<MantineProvider>
			<main className={classes.app}>
				<Home />
			</main>
		</MantineProvider>
	);
};

export default App;
