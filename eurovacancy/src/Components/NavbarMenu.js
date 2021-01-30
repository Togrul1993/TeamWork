import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMenu = () => {
	return (
		<>
			<div className="col-lg-5 col-md-10 navbar-menu">
				<ul className="navbar-menu-items">
					<li className="navbar-menu-items" ><Link to="/" className="menulink">AnaSeyfe</Link></li>
					<li className="navbar-menu-items" ><Link to="/about" className="menulink">Haqqimizda</Link></li>
					<li className="navbar-menu-items" ><Link to="/allvacancy" className="menulink">Vakansiyalar</Link></li>
					<li className="navbar-menu-items" ><Link to="/blog" className="menulink">Blog</Link></li>
					<li className="navbar-menu-items" ><Link to="/rules" className="menulink">Reklam</Link></li>
					<li className="navbar-menu-items" ><Link to="/qaydalar" className="menulink">Qaydalar</Link></li>
					<li className="navbar-menu-items" ><Link to="/contact" className="menulink">Elaqe</Link></li>
				</ul>
			</div>
		</>
	)
}

export default NavbarMenu
