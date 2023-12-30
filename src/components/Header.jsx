import "../css/Header.css";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

export default function Header({ setSelectedSection }) {
	const [darkMode, setDarkMode] = useState(false);
	const [showMyNameInTitle, setShowMyNameInTitle] = useState(null);
	const [enableTitleTransition, setEnableTitleTransition] = useState(false);

	useEffect(() => {
		const enableShowMyName = () => {
			setEnableTitleTransition(true);
			setShowMyNameInTitle(true);
		};

		const waitSeconds = 5;
		const timeoutId = setTimeout(enableShowMyName, waitSeconds * 1000);

		return () => clearTimeout(timeoutId);
	}, []);

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
				"/favicon/favicon-" +
				faviconTheme +
				"/" +
				faviconType +
				"-" +
				favicon.sizes.value +
				".png";
		});

		document.querySelector("link[rel~='apple-touch-icon']").href =
			"/favicon/favicon-" + faviconTheme + "/apple-touch-icon.png";
		document.querySelector("link[rel~='manifest']").href =
			"/favicon/favicon-" + faviconTheme + "/site.webmanifest";
	}, [darkMode]);

	return (
		<header>
			<div
				id="title-container"
				onMouseOver={() => {
					enableTitleTransition &&
						setShowMyNameInTitle(!showMyNameInTitle);
				}}
				onClick={() => {
					enableTitleTransition &&
						setShowMyNameInTitle(!showMyNameInTitle);
					setSelectedSection("Home");
				}}
			>
				<h1
					id="domain-container"
					style={{ opacity: !showMyNameInTitle ? 1 : 0 }}
				>
					nickst97.dev
				</h1>
				<h1
					id="my-name-container"
					style={{ opacity: showMyNameInTitle ? 1 : 0 }}
				>
					Nikolas Stavrakakis
				</h1>
			</div>
			<div id="icons-container">
				<button
					id="light-mode-icon"
					onClick={() => setDarkMode(!darkMode)}
				>
					<FontAwesomeIcon icon={!darkMode ? faMoon : faSun} />
				</button>
				<a
					id="github-icon-container"
					href="https://github.com/nickst97"
					alt="My GitHub Profile"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit my GitHub profile"
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					id="linkedin-icon-container"
					href="https://linkedin.com/in/nickst97"
					alt="My LinkedIn Profile"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit my LinkedIn profile"
				>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</a>
			</div>
		</header>
	);
}
