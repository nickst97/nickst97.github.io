import { useState } from "react";
import "../../css/Contact.css";

export default function Contact() {
	// const [numOfNewLines, setNumOfNewLines] = useState(0);

	// const handleInput = (e) => {
	// 	const element = document.getElementById("contact-form-field-message");

	// 	let newLines = element.getElementsByTagName("div").length;
	// 	console.log(element);
	// 	if (element.offsetWidth >= 650) {
	// 		console.log("hey");
	// 		newLines += 1;
	// 	}
	// 	setNumOfNewLines(newLines);
	// };

	// const calculateHeight = () => {
	// 	return (numOfNewLines + 1) * 22 + "px";
	// };

	return (
		<section id="section-contact">
			<div className="section-main-content" id="contact-form">
				<div className="section-item" id="contact-form-name">
					<div className="section-item-title">Name</div>
					<div
						className="section-item-description contact-form-field"
						contentEditable
					></div>
				</div>
				<div className="section-item" id="contact-form-email">
					<div className="section-item-title">Email</div>
					<div
						className="section-item-description contact-form-field"
						contentEditable
					></div>
				</div>
				<div className="section-item" id="contact-form-message">
					<div className="section-item-title">Message</div>
					<div
						className="section-item-description contact-form-field"
						contentEditable
						id="contact-form-field-message"
					></div>
				</div>
				<button className="nav-item">
					<span>Send</span>
				</button>
			</div>
		</section>
	);
}
