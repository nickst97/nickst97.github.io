import { useState, useEffect } from "react";
import "../css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	const [darkMode, setDarkMode] = useState(false);
	const [hoverState, setTitleHoverState] = useState();
	const [userHoveredTitleBefore, setUserHoveredTitleBefore] = useState(false);
	const [isTimeoutActive, setIsTimeoutActive] = useState(false);

	useEffect(() => {
		const primaryColor = darkMode ? "white" : "black";
		const secondaryColor = darkMode ? "black" : "white";
		const faviconTheme = darkMode ? "dark" : "light";

		const root = document.querySelector(":root");
		root.style.setProperty(
			"--primary-color",
			"var(--" + primaryColor + "-color)"
		);

		root.style.setProperty(
			"--secondary-color",
			"var(--" + secondaryColor + "-color)"
		);

		const favicons = document.querySelectorAll("link[rel='icon']");
		favicons.forEach((favicon) => {
			const faviconType = favicon.href.includes("chrome")
				? "android-chrome"
				: "favicon";
			favicon.href =
				"/favicon-" +
				faviconTheme +
				"/" +
				faviconType +
				"-" +
				favicon.sizes.value +
				".png";
		});

		document.querySelector("link[rel~='apple-touch-icon']").href =
			"/favicon-" + faviconTheme + "/apple-touch-icon.png";
		document.querySelector("link[rel~='manifest']").href =
			"/favicon-" + faviconTheme + "/site.webmanifest";
	}, [darkMode]);

	useEffect(() => {
		if (hoverState) {
			const titleComponentToHide = hoverState;
			const titleComponentToShow =
				hoverState === "domain" ? "my-name" : "domain";

			document.querySelector(
				"#" + titleComponentToHide + "-container"
			).style.opacity = 0;
			document.querySelector(
				"#" + titleComponentToShow + "-container"
			).style.display = "flex";
			document.querySelector(
				"#" + titleComponentToShow + "-container"
			).style.opacity = 0;

			setIsTimeoutActive(true);
			setTimeout(() => {
				document.querySelector(
					"#" + titleComponentToShow + "-container"
				).style.opacity = 1;
				document.querySelector(
					"#" + titleComponentToHide + "-container"
				).style.display = "none";
				setIsTimeoutActive(false); // Set timeout as completed
			}, 1000);
		}
	}, [hoverState]);

	return (
		<header>
			<div id="title-container">
				<div
					id="domain-container"
					onMouseEnter={() =>
						!userHoveredTitleBefore
							? setUserHoveredTitleBefore(true)
							: !isTimeoutActive && setTitleHoverState("domain")
					}
				>
					nickst97.dev
				</div>
				<div
					id="my-name-container"
					style={{ display: "none" }}
					onMouseLeave={() =>
						!isTimeoutActive && setTitleHoverState("my-name")
					}
				>
					Nikolas Stavrakakis
				</div>
			</div>
			<div id="icons-container">
				<div id="light-mode-icon">
					<FontAwesomeIcon
						icon={!darkMode ? faMoon : faSun}
						onClick={() => setDarkMode(!darkMode)}
					/>
				</div>
				<a
					id="github-icon-container"
					href="https://github.com/nickst97"
					alt="My GitHub Profile"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					id="linkedin-icon-container"
					href="https://linkedin.com/in/nickst97"
					alt="My LinkedIn Profile"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
			</div>
		</header>
	);
}
