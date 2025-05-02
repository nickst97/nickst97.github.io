import "../css/index.css";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import SectionContent from "./SectionContent";

const sectionNames = ["Who I Am", "Portfolio", "Achievements", "Reach Out"];

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
			<div className="border-mask" />
			<Header setSelectedSection={setSelectedSection} />
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
