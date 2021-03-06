import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo2 from '../Image/logo.png';


const NavbarMobilMenu = ({ bars, barsClick }) => {

	const [navLink] = useState(
		[
			{
				exact: true,
				title: "AnaSeyfe",
				to: "/"
			},
			{

				title: "Haqqimizda",
				to: "/about"
			},
			{

				title: "Vakansiyalar",
				to: "/vacancies"
			},
			{

				title: "Blog",
				to: "/blog"
			},
			{

				title: "Reklam",
				to: "/advertising"
			},
			{

				title: "Qaydalar",
				to: "/rules"
			},
			{

				title: "Elaqe",
				to: "/contact"
			},
			{

				title: "CV Yerlesdir",
				to: "/addcv"
			}

		]
	)


	const [landuageBtn, setLanduageBtn] = useState(false)

	const LanguageClick = () => {
		setLanduageBtn(!landuageBtn)
	}

	return (
		<>
			<div className={bars ? "navbar-mobil-menu bars-active" : "navbar-mobil-menu"}>
				<div className="menu-mobil-brand">
					<img src={logo2} alt="Logo Mobil Menu" />
					<i className="fa fa-times" aria-hidden="true" onClick={barsClick}></i>
				</div>

				{
					navLink.map((navlink, id) => (
						<NavLink exact={navLink.exact} key={id} to={navlink.to} className="mobil-menu-link" activeClassName="mobil-menu-link-active">{navlink.title}</NavLink>
					))
				}

				<button className="mobil-menu-language-btn" onClick={LanguageClick}>Dil Secimi</button>


				<div className={landuageBtn ? "mobil-language-menu right-active" : "mobil-language-menu"}>
					<span onClick={LanguageClick}><i className="fa fa-arrow-left" aria-hidden="true"></i>Menu</span>
					<div className="language-link-items">
						<Link className="language-link" to="#">Aze</Link>
						<Link className="language-link" to="#">Rus</Link>
						<Link className="language-link" to="#">Eng</Link>
					</div>
				</div>

			</div>
		</>
	)
}

export default NavbarMobilMenu
