import { useState, useEffect } from "react";
import "../css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const primaryColor = darkMode ? "black" : "white";
		const secondaryColor = darkMode ? "white" : "black";
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

	// ... rest of your component code ...

	return (
		<header>
			{/* TODO: add Nikolas Stavrakakis */}
			<div id="title-container">nickst97.dev</div>
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
