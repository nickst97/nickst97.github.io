import "../css/SectionContent.css";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import AwardsCertifications from "./sections/AwardsCertifications";
import Contact from "./sections/Contact";

export default function SectionContent({ selectedSection, setWaveColor }) {
	return (
		<>
			{selectedSection === "Home" && <Home setWaveColor={setWaveColor} />}
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
