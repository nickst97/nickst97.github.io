import { useState } from "react";
import "../../css/Projects.css";

const projectItems = [
	// {
	// 	title: "Webler",
	// 	description: "Product / Alma Economics",
	// 	link: "https://www.google.com",
	// 	color: "#ffffff",
	// },
	{
		title: "Evidence Map",
		description: "Product / Alma Economics",
		link: "https://www.google.com",
		color: "#3B4559",
	},
	{
		title: "Homeless Substance Use Programme",
		description: "Dashboard / Alma Economics",
		link: "https://www.google.com",
		color: "#651e7a",
	},
	{
		title: "Geolocating News",
		description: "Dashboard / Personal Project",
		link: "https://www.google.com",
		color: "#e45340",
	},
	{
		title: "Impact Estimator",
		description: "Dashboard / Alma Economics",
		link: "https://www.google.com",
		color: "#fcee21",
	},
	{
		title: "Card Tracker",
		description: "Add-in / Personal Project",
		link: "https://www.google.com",
		color: "#286f2b",
	},
];

export default function Projects({ setWaveColor }) {
	const [selectedProject, setSelectedProject] = useState(null);
	const [hideThumbnail, setShowThumbnail] = useState(false);

	return (
		<section id="section-projects">
			<div className="section-main-content" id="projects-list">
				{projectItems.map((projectItem) => (
					<div
						className="section-item"
						id={"project-container-" + projectItem.title}
						key={"project-container-" + projectItem.title}
						onMouseMove={() => {
							setShowThumbnail(true);
							setSelectedProject(projectItem);
							setWaveColor(projectItem.color);
						}}
						onMouseLeave={() => {
							setShowThumbnail(false);
							setWaveColor(null);
							setTimeout(() => {
								setSelectedProject(null);
							}, 100);
						}}
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

			{selectedProject && (
				<div
					id="selected-project-thumbnail"
					className={hideThumbnail ? "visible" : "hidden"}
				>
					<a
						href={
							selectedProject.link
						} /*TODO: add links, at the end of the project */
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={require("../../images/project thumbnails/md/" +
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
