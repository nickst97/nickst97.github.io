import "../css/SectionContent.css";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import AwardsCertifications from "./sections/AwardsCertifications";
import Contact from "./sections/Contact";

export default function SectionContent({ selectedSection }) {
	return (
		<>
			{selectedSection === "Home" && <Home />}
			{selectedSection === "Projects" && <Projects />}
			{selectedSection === "Awards & Certifications" && (
				<AwardsCertifications />
			)}
			{selectedSection === "Contact" && <Contact />}
		</>
	);
}
