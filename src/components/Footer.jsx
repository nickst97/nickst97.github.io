import "../css/Footer.css";
export default function Footer() {
	const waveColor = "var(--black-color)";

	return (
		<footer>
			<div id="footer-mask">
				<div id="footer-mask-left"></div>
				<div id="footer-mask-center">
					<div id="footer-mask-center-top"></div>
					<div id="footer-mask-center-bottom"></div>
				</div>
				<div id="footer-mask-right"></div>
			</div>
			<div className="ocean" style={{ backgroundColor: waveColor }}>
				<div
					className="wave"
					style={{ backgroundColor: waveColor }}
				></div>
			</div>
		</footer>
	);
}
