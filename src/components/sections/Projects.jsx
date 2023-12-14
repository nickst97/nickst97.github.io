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
	const defaultThumbnailSize = { width: 400, height: 300 };
	const [selectedProject, setSelectedProject] = useState(null);
	const [showThumbnail, setShowThumbnail] = useState(false);
	const [thumbnailHeight, setThumbnailHeight] = useState(
		defaultThumbnailSize.height
	);
	const [thumbnailWidth, setThumbnailWidth] = useState(
		defaultThumbnailSize.width
	);

	const [mobileScreen, setMobileScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			removeProject();
			setMobileScreen(window.innerWidth <= 830);
			const computedStyles = getComputedStyle(document.documentElement);
			const pagePadding =
				parseInt(
					computedStyles.getPropertyValue("--page-padding"),
					10
				) || 0;

			const newThumbnailWidth =
				window.innerWidth -
				document.querySelector(".section-main-content").offsetWidth -
				document.querySelector("nav").offsetWidth -
				6 * pagePadding;
			setThumbnailWidth(newThumbnailWidth);
			setThumbnailHeight("auto");
		};

		const handleClick = (event) => {
			if (!event.target.className.startsWith("section-item-")) {
				removeProject();
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		document.addEventListener("click", handleClick);

		return () => {
			window.removeEventListener("resize", handleResize);
			document.removeEventListener("click", handleClick);
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
							if (mobileScreen) {
								setTimeout(() => {
									window.open(projectItem.link, "_blank");
								}, 1200);
							}
						}}
						onMouseMove={() => {
							chooseProject(projectItem);
						}}
						onMouseLeave={() => {
							removeProject();
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
					className={showThumbnail ? "visible" : "hidden"}
					style={{
						height: thumbnailHeight,
						width: thumbnailWidth,
					}}
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
							alt={selectedProject.title + " thumbnail"} // TODO: make the alt the ids
							className="section-item-thumbnail"
						/>
					</a>
				</div>
			)}
		</section>
	);
}
