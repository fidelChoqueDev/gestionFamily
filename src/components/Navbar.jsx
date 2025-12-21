import "./Navbar.css"
import logo from "../assets/logoV2.svg"
import { NavbarLinks } from "../utils/Ruetes"
import { useState } from "react";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="header">
			<div className="logo-container">
				<img src={logo} alt="Logo" className="logo" />
				<h1>Crash Coin</h1>
			</div>
			
			<div className={`nav_items ${isOpen && "open"}`}>
				<ul>
					{NavbarLinks.map((link) => (
						<li key={link.id}>
							<a href={link.path}>{link.name}</a>
						</li>
					))}
				</ul>
			</div>
			<div className= {`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
  )
};

