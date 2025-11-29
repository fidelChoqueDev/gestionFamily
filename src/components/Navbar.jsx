//import "./Navbar.css"
import logo from "../assets/logoV2.svg"
import { NavbarLinks } from "../utils/Ruetes"

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
			<header className="bg-red ">
				<div className="bg-green-500">
					<img src={logo} alt="Logo" className="logo" />
					<h1>Crash Coin</h1>
				</div>
				<div>
					<ul className="flex space-x-4">
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

