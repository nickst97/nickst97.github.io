import "../css/Footer.css";

export default function Footer({ waveColor }) {
	return (
		<footer>
			<div id="footer-mask">
				<div id="footer-mask-left" />
				<div id="footer-mask-center">
					<div id="footer-mask-center-top" />
					<div id="footer-mask-center-bottom" />
				</div>
				<div id="footer-mask-right" />
			</div>
			<div className="ocean">
				<div
					className="wave"
					style={{
						backgroundColor: waveColor,
					}}
				/>
			</div>
		</footer>
	);
}
