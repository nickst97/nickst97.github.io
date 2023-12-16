import "./index.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SectionContent from "./components/SectionContent";

const sectionNames = ["Home", "Projects", "Awards & Certifications", "Contact"];

function App() {
	const [selectedSection, setSelectedSection] = useState(sectionNames[0]);
	const [waveColor, setWaveColor] = useState(null);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 830 && window.innerHeight <= 600) {
				setSelectedSection(sectionNames[0]);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<Header />
			<main>
				<NavBar
					sectionNames={sectionNames}
					selectedSection={selectedSection}
					setSelectedSection={setSelectedSection}
					setWaveColor={setWaveColor}
				/>
				<SectionContent
					selectedSection={selectedSection}
					setWaveColor={setWaveColor}
				/>
			</main>
			<Footer waveColor={waveColor} />
		</>
	);
}

export default App;
