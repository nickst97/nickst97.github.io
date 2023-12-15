import "../css/SectionContent.css";
import AwardsCertifications from "./sections/AwardsCertifications";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";

export default function SectionContent({ selectedSection, setWaveColor }) {
	return (
		<>
			{selectedSection === "Home" && <Home />}
			{selectedSection === "Projects" && (
				<Projects setWaveColor={setWaveColor} />
			)}
			{selectedSection === "Awards & Certifications" && (
				<AwardsCertifications setWaveColor={setWaveColor} />
			)}
			{selectedSection === "Contact" && (
				<Contact setWaveColor={setWaveColor} />
			)}
		</>
	);
}
