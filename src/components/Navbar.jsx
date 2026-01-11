import "./Navbar.css"
import logo from "../assets/logoV2.png"
import { NavbarLinks } from "../utils/Ruetes"
import { useState } from "react";

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="header">
			<img src={logo} alt="Logo" className="logo" />
			<div className="logo-container">
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

