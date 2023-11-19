import "../../css/Projects.css";

const projectItems = [
	{
		title: "Webler",
		description: "Product / Alma Economics",
		link: "https://www.google.com",
	},
	{
		title: "Evidence Map",
		description: "Product / Alma Economics",
		link: "https://www.google.com",
	},
	{
		title: "Homeless Substance Use Programme",
		description: "Dashboard / Alma Economics",
		link: "https://www.google.com",
	},
	{
		title: "Geolocating News",
		description: "Dashboard / Personal Project",
		link: "https://www.google.com",
	},
	{
		title: "Impact Estimator",
		description: "Dashboard / Alma Economics",
		link: "https://www.google.com",
	},
	{
		title: "Card Tracker",
		description: "Add-in / Personal Project",
		link: "https://www.google.com",
	},
];

export default function Projects() {
	return (
		<section id="section-awards-certifications">
			{projectItems.map((projectItem) => (
				<a
					className="section-item"
					id={"project-container-" + projectItem.title}
					href={
						projectItem.link
					} /*TODO: add links, at the end of the project */
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="section-item-title">
						{projectItem.title}
					</div>
					<div className="section-item-description">
						{projectItem.description}
					</div>
				</a>
			))}
		</section>
	);
}
