import "../css/NavBar.css";
export default function NavBar({
	sectionNames,
	selectedSection,
	setSelectedSection,
	setWaveColor,
}) {
	return (
		<nav>
			{sectionNames.map((sectionName) => (
				<button
					className={
						"nav-item " +
						(selectedSection === sectionName
							? "nav-item-selected"
							: "")
					}
					onClick={() => {
						setSelectedSection(sectionName);
						setWaveColor(null);
					}}
				>
					<span>{sectionName}</span>
				</button>
			))}
		</nav>
	);
}
