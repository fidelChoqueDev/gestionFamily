import "./Navbar.css"
import logo from "../assets/logoV2.svg"
import { NavbarLinks } from "../utils/Ruetes"

export const Navbar = () => {
  return (
    <nav className="container">
			<header className="header">
				<div className="logo-container">
					<img src={logo} alt="Logo" className="logo" />
					<h1>Crash Coin</h1>
				</div>
				<div>
					<ul className="nav-links">
						{NavbarLinks.map((link) => (
							<li key={link.id}>
								<a href={link.path}>{link.name}</a>
							</li>
						))}
					</ul>
				</div>
			</header>
		</nav>
  )
};

