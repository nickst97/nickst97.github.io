import "../css/NavBar.css";
export default function NavBar({ pageNames, selectedPage, setSelectedPage }) {
	return (
		<nav>
			{pageNames.map((pageName) => (
				<button
					className={
						"nav-item " +
						(selectedPage === pageName ? "nav-item-selected" : "")
					}
					onClick={() => setSelectedPage(pageName)}
				>
					<span>{pageName}</span>
				</button>
			))}
		</nav>
	);
}
