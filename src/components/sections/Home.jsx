import { useEffect } from "react";
import "../../css/Home.css";
import WebFont from "webfontloader";

export default function Home() {
	useEffect(() => {
		WebFont.load({
			custom: {
				families: ["Mabry"],
			},
		});
	}, []);

	return (
		<section id="section-home">
			{/* TODO: Revisit how it looks regarding line breaks */}
			<div className="section-main-content">
				<div className="section-item">
					Full-stack developer with a strong proficiency in developing
					interactive and dynamic websites. Experienced in team
					management and project planning, I am passionate about
					turning ideas into digital experiences with a focus on both
					creativity and strategic execution.
				</div>
			</div>
		</section>
	);
}
