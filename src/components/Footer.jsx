import "../css/Footer.css";

export default function Footer({ waveColor }) {
	return (
		<footer>
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
