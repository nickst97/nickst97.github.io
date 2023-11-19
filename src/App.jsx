import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const pageNames = ["Home", "Projects", "Awards & Certifications", "Contact"];

function App() {
	const [selectedPage, setSelectedPage] = useState(pageNames[0]);

	return (
		<>
			<Header />
			<NavBar
				pageNames={pageNames}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Footer />
		</>
	);
}

export default App;
