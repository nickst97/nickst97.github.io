import "../css/SectionContent.css";
import AwardsCertifications from "./sections/AwardsCertifications";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Portfolio from "./sections/Portfolio";

export default function SectionContent({ selectedSection, setWaveColor }) {
	return (
		<>
			{selectedSection === "Who I Am" && <Home />}
			{selectedSection === "Portfolio" && (
				<Portfolio setWaveColor={setWaveColor} />
			)}
			{selectedSection === "Achievements" && (
				<AwardsCertifications setWaveColor={setWaveColor} />
			)}
			{selectedSection === "Reach Out" && (
				<Contact setWaveColor={setWaveColor} />
			)}
		</>
	);
}
