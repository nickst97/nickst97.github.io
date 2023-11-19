import "../css/NavBar.css";
export default function NavBar({
	sectionNames,
	selectedSection,
	setSelectedSection,
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
					onClick={() => setSelectedSection(sectionName)}
				>
					<span>{sectionName}</span>
				</button>
			))}
		</nav>
	);
}
