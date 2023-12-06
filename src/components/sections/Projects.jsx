import "../../css/Projects.css";
import { useState, useEffect } from "react";

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
	const [showThumbnail, setShowThumbnail] = useState(false);
	const [thumbnailHeight, setThumbnailHeight] = useState(null);
	const [pointerType, setPointerType] = useState();

	useEffect(() => {
		const detectPointerType = () => {
			document.addEventListener("pointerdown", (event) => {
				setPointerType(event.pointerType);
			});
		};

		const handleResize = () => {
			if (window.innerWidth <= 850) {
				const headerElement = document.querySelector("header");
				const navElement = document.querySelector("nav");

				if (headerElement && navElement) {
					const computedStyles = getComputedStyle(
						document.documentElement
					);
					const pagePadding =
						parseInt(
							computedStyles.getPropertyValue("--page-padding"),
							10
						) || 0;

					const combinedHeight =
						headerElement.clientHeight +
						navElement.clientHeight +
						pagePadding;
					setThumbnailHeight(combinedHeight);
				}
			}
		};

		// Initial setup on mount
		handleResize();
		detectPointerType();

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);
		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // Empty dependency array to run effect only on mount and unmount

	const chooseProject = (projectItem) => {
		setShowThumbnail(true);
		setSelectedProject(projectItem);
		setWaveColor(projectItem.color);
	};

	const removeProject = () => {
		setShowThumbnail(false);
		setWaveColor(null);
		setTimeout(() => {
			setSelectedProject(null);
		}, 100);
	};

	return (
		<section id="section-projects">
			<div className="section-main-content" id="projects-list">
				{projectItems.map((projectItem) => (
					<div
						className="section-item"
						id={"project-container-" + projectItem.title}
						key={"project-container-" + projectItem.title}
						onClick={() => {
							if (selectedProject) {
								removeProject();
								setTimeout(() => {
									chooseProject(projectItem);
								}, 300);
							} else {
								chooseProject(projectItem);
							}
						}}
						onMouseMove={() => {
							if (
								pointerType !== "touch" &&
								pointerType !== "pen"
							) {
								chooseProject(projectItem);
							}
						}}
						onMouseLeave={() => {
							if (
								pointerType !== "touch" &&
								pointerType !== "pen"
							) {
								removeProject();
							}
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
			{/* TODO Homeless Substance Use Programme
Dashboard / Alma Economics IN SMALL SCREENS */}

			{/* todo: add on click elsewhere */}
			{selectedProject && (
				<div
					id="selected-project-thumbnail"
					className={showThumbnail ? "visible" : "hidden"}
					style={{ height: thumbnailHeight }}
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
