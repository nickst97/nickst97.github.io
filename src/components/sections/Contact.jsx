import { useState } from "react";
import "../../css/Contact.css";

export default function Contact() {
	const [numOfNewLines, setNumOfNewLines] = useState(0);

	const handleInput = (e) => {
		const element = document.getElementById("contact-form-field-message");
		let newLines = element.getElementsByTagName("div").length;

		setNumOfNewLines(newLines);
	};

	const calculateHeight = () => {
		return (numOfNewLines + 1) * 22 + "px";
	};

	return (
		<section id="section-contact">
			<div className="section-main-content" id="contact-form">
				<div className="section-item" id="contact-form-name">
					<div className="section-item-title">Name</div>
					<div
						className="section-item-description contact-form-field"
						contentEditable
					>
						Jon Smith
					</div>
				</div>
				<div className="section-item" id="contact-form-email">
					<div className="section-item-title">Email</div>
					<div
						className="section-item-description contact-form-field"
						contentEditable
					>
						email
					</div>
				</div>
				<div className="section-item" id="contact-form-message">
					<div className="section-item-title">Message</div>
					<div
						className="section-item-description contact-form-field"
						contentEditable
						id="contact-form-field-message"
						onInput={handleInput}
						style={{ height: calculateHeight() }}
					>
						Hey you beatiful bastard
					</div>
				</div>
			</div>
		</section>
	);
}
