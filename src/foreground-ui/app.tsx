import { MantineProvider, Modal, ScrollArea } from "@mantine/core";
import { useEffect, useState } from "react";
import { MODAL_STATE_KEY } from "../shared/constants";
import { ICSRFDetails } from "../types/ICSRFDetails";
import Home from "./components/home";

export const App = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [dtData, setDtData] = useState<ICSRFDetails>({
		csrf_header_name: (window as any)["csrf_header_name"],
		csrf_token: (window as any)["csrf_token"],
	});

	useEffect(() => {
		window.addEventListener("message", (event) => {
			if (event.data.key === MODAL_STATE_KEY) {
				setModalOpen(event.data.value);
			}
		});
	}, []);

	return (
		<MantineProvider>
			<Modal centered closeOnClickOutside={false} closeOnEscape={false} opened={modalOpen} onClose={() => setModalOpen(false)} size={700} zIndex={2147480000}>
				<ScrollArea style={{ height: 500 }}>
					<main>
						<Home />
					</main>
				</ScrollArea>
			</Modal>
		</MantineProvider>
	);
};

export default App;
