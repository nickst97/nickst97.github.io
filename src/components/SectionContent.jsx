import "../css/SectionContent.css";
import AwardsCertifications from "./sections/AwardsCertifications";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Work from "./sections/Work";

export default function SectionContent({ selectedSection, setWaveColor }) {
	return (
		<>
			{selectedSection === "About" && <Home />}
			{selectedSection === "Work" && <Work setWaveColor={setWaveColor} />}
			{selectedSection === "Achievements" && (
				<AwardsCertifications setWaveColor={setWaveColor} />
			)}
			{selectedSection === "Contact" && (
				<Contact setWaveColor={setWaveColor} />
			)}
		</>
	);
}
