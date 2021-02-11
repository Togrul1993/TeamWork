import React from 'react';


const NavbarMenu = () => {


	return (
		<>
			<div className="col-lg-6 col-md-10 pl-md-2 pr-md-2 navbar-menu">
				<ul className="navbar-menu-items">

					<li className="navbar-menu-item" ><a  href="/" className="menulink">AnaSeyfe</a></li>
					<li className="navbar-menu-item" ><a  href="/about" className="menulink">Haqqimizda</a></li>
					<li className="navbar-menu-item" ><a  href="/vacancies" className="menulink">Vakansiyalar</a></li>
					<li className="navbar-menu-item" ><a  href="/blog" className="menulink">Blog</a></li>
					<li className="navbar-menu-item" ><a  href="/advertising" className="menulink">Reklam</a></li>
					<li className="navbar-menu-item" ><a  href="/rules" className="menulink">Qaydalar</a></li>
					<li className="navbar-menu-item" ><a  href="/contact" className="menulink">Elaqe</a></li>

				</ul>
			</div>
		</>
	)
}

export default NavbarMenu
