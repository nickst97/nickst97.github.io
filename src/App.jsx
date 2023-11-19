import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SectionContent from "./components/SectionContent";

const sectionNames = ["Home", "Projects", "Awards & Certifications", "Contact"];

function App() {
	const [selectedSection, setSelectedSection] = useState(sectionNames[0]);

	return (
		<>
			<Header />
			<main>
				<NavBar
					sectionNames={sectionNames}
					selectedSection={selectedSection}
					setSelectedSection={setSelectedSection}
				/>
				<SectionContent selectedSection={selectedSection} />
			</main>
			<Footer />
		</>
	);
}

export default App;
