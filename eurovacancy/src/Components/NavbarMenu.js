import React from 'react';
import { NavLink } from 'react-router-dom';


const NavbarMenu = () => {


	return (
		<>
			<div className="col-lg-6 col-md-10 pl-md-2 pr-md-2 navbar-menu">
				<ul className="navbar-menu-items">

					<li className="navbar-menu-items" ><NavLink exact activeclassname="activelink" to="/" className="menulink">AnaSeyfe</NavLink></li>
					<li className="navbar-menu-items" ><NavLink activeclassname="activelink" to="/about" className="menulink">Haqqimizda</NavLink></li>
					<li className="navbar-menu-items" ><NavLink activeclassname="activelink" to="/vacancies" className="menulink">Vakansiyalar</NavLink></li>
					<li className="navbar-menu-items" ><NavLink activeclassname="activelink" to="/blog" className="menulink">Blog</NavLink></li>
					<li className="navbar-menu-items" ><NavLink activeclassname="activelink" to="/advertising" className="menulink">Reklam</NavLink></li>
					<li className="navbar-menu-items" ><NavLink activeclassname="activelink" to="/rules" className="menulink">Qaydalar</NavLink></li>
					<li className="navbar-menu-items" ><NavLink activeclassname="activelink" to="/contact" className="menulink">Elaqe</NavLink></li>

				</ul>
			</div>
		</>
	)
}

export default NavbarMenu
