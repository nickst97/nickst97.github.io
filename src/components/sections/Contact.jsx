import { useState, useEffect } from "react";
import "../../css/Contact.css";
import emailjs from "@emailjs/browser";

export default function Contact({ setWaveColor }) {
	const [emailSentStatus, setEmailSentStatus] = useState();
	const [emailResultMessage, setEmailResultMessage] = useState(null);
	const [fieldWithError, setFieldWithError] = useState(null);
	const fieldNames = ["name", "email", "message"];
	const fieldErrorMessages = {
		name: "Please enter your name",
		email: "Please enter your email",
		message: "Please type a message",
	};

	useEffect(() => {
		if (emailSentStatus) {
			setWaveColor("var(--" + emailSentStatus + "-color");
		} else {
			setWaveColor(null);
		}
		if (!emailSentStatus && emailResultMessage) {
			setTimeout(() => {
				setEmailResultMessage(null);
			}, 100);
		}
	}, [emailSentStatus, emailResultMessage, setWaveColor]);

	const sendEmail = () => {
		const formContent = {};
		emailSentStatus && removeWarning();
		fieldNames.forEach((fieldName) => {
			formContent[fieldName] = document
				.getElementById("contact-form-field-" + fieldName)
				.innerHTML.trim();
		});

		// TODO: remove this when project is finished
		if (checkFormValidity(formContent)) {
			if (process.env.NODE_ENV !== "development") {
				emailjs
					.send(
						process.env.REACT_APP_EMAILJS_SERVICE_ID,
						process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
						formContent,
						process.env.REACT_APP_EMAILJS_PUBLIC_KEY
					)
					.then(
						function () {
							setEmailSentStatus("success");
							setEmailResultMessage("Email sent successfully");
						},
						function () {
							// TODO: grab the error from here
							setEmailSentStatus("error");
							setEmailResultMessage("Email failed to send");
						}
					);
			}
			// TODO: remove this when project is finished
			setEmailSentStatus("success");
			setEmailResultMessage("Email sent successfully");
		}
	};

	const emailIsValid = (email) => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		if (!emailRegex.test(email)) {
			return false;
		} else {
			return true;
		}
	};

	const removeWarning = (fieldName = null) => {
		if (fieldWithError === fieldName || fieldWithError === null) {
			setEmailSentStatus(null);
			setFieldWithError(null);
		}
	};

	const checkFormValidity = (formContent) => {
		let everythingWasValid = true;
		fieldNames.reverse().forEach((fieldName) => {
			if (formContent[fieldName] === "") {
				setEmailSentStatus("error");
				setFieldWithError(fieldName);
				setEmailResultMessage(fieldErrorMessages[fieldName]);
				everythingWasValid = false;
			} else if (
				fieldName === "email" &&
				!emailIsValid(formContent[fieldName])
			) {
				setEmailSentStatus("error");
				setFieldWithError(fieldName);
				setEmailResultMessage("Please enter a valid email address");
				everythingWasValid = false;
			}
		});
		return everythingWasValid;
	};

	return (
		<section id="section-contact">
			<div className="section-main-content" id="contact-form">
				<div
					className={`section-item ${
						fieldWithError === "name" ? "style-error" : ""
					}`}
					id="contact-form-name"
				>
					<div className="section-item-title">Name</div>
					<div
						className="section-item-description contact-form-field"
						id="contact-form-field-name"
						onInput={() => removeWarning("name")}
						contentEditable
					/>
				</div>
				<div
					className={`section-item ${
						fieldWithError === "email" ? "style-error" : ""
					}`}
					id="contact-form-email"
				>
					<div className="section-item-title">Email</div>
					<div
						className="section-item-description contact-form-field"
						id="contact-form-field-email"
						onInput={() => removeWarning("email")}
						contentEditable
					/>
				</div>
				<div
					className={`section-item ${
						fieldWithError === "message" ? "style-error" : ""
					}`}
					id="contact-form-message"
				>
					<div className="section-item-title">Message</div>
					<div
						className="section-item-description contact-form-field"
						id="contact-form-field-message"
						onInput={() => removeWarning("message")}
						contentEditable
					/>
				</div>
				<div
					className="section-item"
					id="contact-form-button-container"
				>
					<div
						className={`section-item-title ${
							emailSentStatus
								? "style-" + emailSentStatus + " visible"
								: "hidden"
						}`}
					>
						{emailResultMessage}
					</div>
					<button className="nav-item" onClick={sendEmail}>
						<span>Send</span>
					</button>
				</div>
			</div>
		</section>
	);
}
