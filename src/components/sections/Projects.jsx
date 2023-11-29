import { useState } from "react";
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

export default function Projects({ setWaveColor }) {
	const [selectedProject, setSelectedProject] = useState(null);

	return (
		<section id="section-projects">
			<div className="section-main-content" id="projects-list">
				{projectItems.map((projectItem) => (
					<div
						className="section-item"
						id={"project-container-" + projectItem.title}
						key={"project-container-" + projectItem.title}
						onMouseOver={() => setSelectedProject(projectItem)}
					>
						<div className="section-item-title">
							{projectItem.title}
						</div>
						<div className="section-item-description">
							{projectItem.description}
						</div>
					</div>
				))}
			</div>
			{/* TODO: make showing the thumbnails faster */}
			{selectedProject && (
				<div id="selected-project-thumbnail">
					<a
						href={
							selectedProject.link
						} /*TODO: add links, at the end of the project */
						target="_blank"
						rel="noopener noreferrer"
					>
						{/* TODO: take screenshot with the right resolution */}
						<img
							src={require("../../images/project thumbnails/" +
								selectedProject.title +
								".png")}
							alt={selectedProject.title + " thumbnail"}
						/>
					</a>
				</div>
			)}
		</section>
	);
}
