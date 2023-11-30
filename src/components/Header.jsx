import { useState, useEffect } from "react";
import "../css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const root = document.documentElement.style;

		root.setProperty(
			"--primary-color",
			darkMode ? "var(--white-color)" : "var(--black-color)"
		);
		root.setProperty(
			"--secondary-color",
			darkMode ? "var(--black-color)" : "var(--white-color)"
		);
	}, [darkMode]);

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
