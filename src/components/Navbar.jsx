import "./Navbar.css"
import logo from "../assets/logoV2.svg"
import { NavbarLinks } from "../utils/Ruetes"

export const Navbar = () => {
  return (
    <nav className="header">
		<div>
			<img src={logo} alt="Logo" className="logo" />
		</div>
		<h1>Crash Coin</h1>
		<ul>
			{NavbarLinks.map((link) => (
				<li key={link.id}>
					<a href={link.path}>{link.name}</a>
				</li>
			))}
		</ul>
	</nav>
  )
};

