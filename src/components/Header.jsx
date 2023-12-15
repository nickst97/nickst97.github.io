import { useState, useEffect } from "react";
import "../css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	const [darkMode, setDarkMode] = useState(false);
	const [showMyNameInTitle, setShowMyNameInTitle] = useState(null);

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
	}, [darkMode]);

	return (
		<header>
			<div
				id="title-container"
				onMouseOver={() => {
					setShowMyNameInTitle(!showMyNameInTitle);
				}}
			>
				<div
					id="domain-container"
					style={{ opacity: !showMyNameInTitle ? 1 : 0 }}
				>
					nickst97.dev
				</div>
				<div
					id="my-name-container"
					style={{ opacity: showMyNameInTitle ? 1 : 0 }}
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
