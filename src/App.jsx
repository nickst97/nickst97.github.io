import { useState } from "react";
import "./index.css";
import "./fonts.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SectionContent from "./components/SectionContent";

var WebFont = require("webfontloader");
WebFont.load({
	custom: {
		families: ["Mabry"],
		urls: ["/fonts.css"],
	},
});

const sectionNames = ["Home", "Projects", "Awards & Certifications", "Contact"];

function App() {
	const [selectedSection, setSelectedSection] = useState(sectionNames[0]);
	const [waveColor, setWaveColor] = useState(null);

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
