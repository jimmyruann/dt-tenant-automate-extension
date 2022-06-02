import { Alert, Button, Space } from "@mantine/core";
import { useState } from "react";
import { toggleModalState } from "../../shared/toggleModalState";

export const Home = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [error, setError] = useState("");

	const toggleOpenForeground = () => {
		toggleModalState<boolean>(
			modalOpen,
			(response) => setModalOpen(response),
			() => setError("The current page is not an Dynatrace environment."),
		);
	};

	return (
		<div>
			<Button color='orange' fullWidth onClick={toggleOpenForeground}>
				Open Health Check Window
			</Button>

			{error && (
				<>
					<Space h='md' />
					<Alert title='Error' color='red'>
						{error}
					</Alert>
				</>
			)}
		</div>
	);
};

export default Home;
