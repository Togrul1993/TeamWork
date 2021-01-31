import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarMobilMenu = () => {
	return (
		<>
			<div className="navbar-mobil-menu">
				<NavLink exact to="/" className="mobil-menu-link" activeClassName="mobil-menu-link-active">AnaSeyfe</NavLink>
				<NavLink to="/about" className="mobil-menu-link" activeClassName="mobil-menu-link-active">Haqqimizda</NavLink>
				<NavLink to="/vacancy" className="mobil-menu-link" activeClassName="mobil-menu-link-active">Vakansiyalar</NavLink>
				<NavLink to="/blog" className="mobil-menu-link" activeClassName="mobil-menu-link-active">Blog</NavLink>
				<NavLink to="/advertising" className="mobil-menu-link" activeClassName="mobil-menu-link-active">Reklam</NavLink>
				<NavLink to="/rules" className="mobil-menu-link" activeClassName="mobil-menu-link-active">Qaydalar</NavLink>
				<NavLink to="/contact" className="mobil-menu-link" activeClassName="mobil-menu-link-active">Elaqe</NavLink>
				<NavLink to="/addCv" className="mobil-menu-link" activeClassName="mobil-menu-link-active">CV Yerlesdir</NavLink>
				<button className="mobil-menu-language-btn">Dil Secimi</button>

			</div>
		</>
	)
}

export default NavbarMobilMenu
