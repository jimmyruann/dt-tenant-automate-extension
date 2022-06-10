import { Button } from "@mantine/core";

export const Home = () => {
	const handleOpen = () => {
		window.open(chrome.runtime.getURL("app.html"), "_blank")?.focus();
	};

	return (
		<div>
			<Button color='orange' fullWidth onClick={handleOpen}>
				Open Health Check Window
			</Button>
		</div>
	);
};

export default Home;
