import "../../css/AwardsCertifications.css";

const awardsCertificationsItems = [
	{
		title: "Accessible code",
		description: "A11Y Collective",
		color: "#0600ed",
	},
	{
		title: "Web accessibility, the basics",
		description: "A11Y Collective",
		color: "#008689",
	},
	{
		title: '3rd place at "Copernicus Hackathon in Athens 2019"',
		description: "Corallia Clusters Initiative",
		color: "#fcb434",
	},
];

export default function AwardsCertifications({ setWaveColor }) {
	return (
		<section id="section-awards-certifications">
			<div className="section-main-content">
				{awardsCertificationsItems.map((awardsCertificationsItem) => (
					<div
						className="section-item"
						id={
							"awards-cerification-container-" +
							awardsCertificationsItem.title
						}
						onMouseOver={() => {
							setWaveColor(awardsCertificationsItem.color);
						}}
						onMouseLeave={() => {
							setWaveColor(null);
						}}
					>
						<div className="section-item-title">
							{awardsCertificationsItem.title}
						</div>
						<div className="section-item-description">
							{awardsCertificationsItem.description}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
