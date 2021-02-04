import React from 'react';
import { BrowserRouter as Router, a } from 'react-router-dom';


const NavbarMenu = () => {


	return (
		<>
			<div className="col-lg-6 col-md-10 pl-md-2 pr-md-2 navbar-menu">
				<ul className="navbar-menu-items">
					<Router>
						<li className="navbar-menu-items" ><a activeclassname="activelink" href="/" className="menulink">AnaSeyfe</a></li>
						<li className="navbar-menu-items" ><a activeclassname="activelink" href="/about" className="menulink">Haqqimizda</a></li>
						<li className="navbar-menu-items" ><a activeclassname="activelink" href="/vacancies" className="menulink">Vakansiyalar</a></li>
						<li className="navbar-menu-items" ><a activeclassname="activelink" href="/blog" className="menulink">Blog</a></li>
						<li className="navbar-menu-items" ><a activeclassname="activelink" href="/advertising" className="menulink">Reklam</a></li>
						<li className="navbar-menu-items" ><a activeclassname="activelink" href="/rules" className="menulink">Qaydalar</a></li>
						<li className="navbar-menu-items" ><a activeclassname="activelink" href="/contact" className="menulink">Elaqe</a></li>
					</Router>
				</ul>
			</div>
		</>
	)
}

export default NavbarMenu
