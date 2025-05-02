import "../../css/Portfolio.css";
import { useState, useEffect, useCallback } from "react";

const projectItems = [
	// {
	// 	title: "Webler",
	// 	description: "Product / Alma Economics",
	// 	link: "https://www.webler.io/",
	// 	color: "#395643",
	// },
	{
		title: "viva.com",
		description: "Website / Viva.com",
		link: "https://www.viva.com/",
		color: "#0e121a",
	},
	{
		title: "Avimar Villas",
		description: "Website / Personal Project",
		link: "https://www.avimarvillas.com/",
		color: "#323232",
	},
	{
		title: "Evidence Map",
		description: "Product / Alma Economics",
		link: "https://evidencemap.com/",
		color: "#3B4559",
	},
	{
		title: "Homeless Service Map",
		description: "Dashboard / Alma Economics",
		link: "https://homeless-service-map.herokuapp.com/",
		color: "#651e7a",
	},
	{
		title: "Geolocating News",
		description: "Dashboard / Personal Project",
		link: "https://geolocating.news/",
		color: "#e45340",
	},
	{
		title: "Impact Estimator",
		description: "Dashboard / Alma Economics",
		link: "https://www.impactestimator.com/",
		color: "#fcee21",
	},
	// {
	// 	title: "Card Tracker",
	// 	description: "Add-in / Personal Project",
	// 	link: "https://chromewebstore.google.com/detail/card-tracker-for-dod-tich/iojpfoakmcbckgabflfieepdadcbiodb?hl=en",
	// 	color: "#286f2b",
	// },
];

export default function Portfolio({ setWaveColor }) {
	const defaultThumbnailSize = { width: 400, height: 300 };
	const [selectedProject, setSelectedProject] = useState(null);
	const [showThumbnail, setShowThumbnail] = useState(false);
	const [thumbnailHeight, setThumbnailHeight] = useState(
		defaultThumbnailSize.height
	);
	const [thumbnailWidth, setThumbnailWidth] = useState(
		defaultThumbnailSize.width
	);

	const chooseProject = (projectItem) => {
		setShowThumbnail(true);
		setSelectedProject(projectItem);
		setWaveColor(projectItem.color);
	};

	const removeProject = useCallback(() => {
		setShowThumbnail(false);
		setWaveColor(null);
		setTimeout(() => {
			setSelectedProject(null);
		}, 100);
	}, [setShowThumbnail, setWaveColor, setSelectedProject]);

	useEffect(() => {
		const handleResize = () => {
			removeProject();
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
	}, [removeProject]);

	return (
		<section id="section-projects">
			<div className="section-main-content" id="projects-list">
				{projectItems.map((projectItem) => (
					<a
						className="section-item"
						id={"project-container-" + projectItem.title}
						key={"project-container-" + projectItem.title}
						href={projectItem.link}
						target="_blank"
						rel="noopener noreferrer"
						onMouseMove={() => {
							chooseProject(projectItem);
						}}
						onFocus={() => {
							chooseProject(projectItem);
						}}
						onMouseLeave={() => {
							removeProject();
						}}
						onBlur={() => {
							removeProject();
						}}
						tabIndex="0"
					>
						<h2 className="section-item-title">
							{projectItem.title}
						</h2>
						<h3 className="section-item-description">
							{projectItem.description}
						</h3>
					</a>
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
					<img
						src={require("../../images/projects_thumbnails/" +
							selectedProject.title +
							".webp")}
						alt={selectedProject.title + " thumbnail"}
						id={selectedProject.title + " thumbnail"}
						className="section-item-thumbnail"
						fetchPriority="high"
					/>
				</div>
			)}
		</section>
	);
}
