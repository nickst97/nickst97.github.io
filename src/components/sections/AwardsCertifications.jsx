import "../../css/AwardsCertifications.css";

const awardsCertificationsItems = [
	{
		title: "Accessible code",
		description: "A11Y Collective",
		color: "#0600ed",
		link: null,
	},
	{
		title: "Web accessibility, the basics",
		description: "A11Y Collective",
		color: "#008689",
		link: null,
	},
	{
		title: '3rd place at "Copernicus Hackathon in Athens 2019"',
		description: "Corallia Clusters Initiative",
		color: "#fcb434",
		link: null,
	},
	{
		title: "Visionary Award for Queens Game 👑",
		description: "LinkedIn",
		color: "#ffd4ab",
		link: "https://www.linkedin.com/games/queens",
	},
];

export default function AwardsCertifications({ setWaveColor }) {
	return (
		<section id="section-awards-certifications">
			<div className="section-main-content">
				{awardsCertificationsItems.map((awardsCertificationsItem) => (
					<a
						className="section-item"
						id={
							"awards-cerification-container-" +
							awardsCertificationsItem.title
						}
						key={
							"awards-cerification-container-" +
							awardsCertificationsItem.title
						}
						onMouseMove={() => {
							setWaveColor(awardsCertificationsItem.color);
						}}
						onMouseLeave={() => {
							setWaveColor(null);
						}}
						{...(awardsCertificationsItem.link
							? {
									href: awardsCertificationsItem.link,
									target: "_blank",
									rel: "noopener noreferrer",
							  }
							: {})}
					>
						<h2 className="section-item-title">
							{awardsCertificationsItem.title}
						</h2>
						<h3 className="section-item-description">
							{awardsCertificationsItem.description}
						</h3>
					</a>
				))}
			</div>
		</section>
	);
}
