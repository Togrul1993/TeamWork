import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../Image/logo.png'
import NavbarMenu from './NavbarMenu'


const Navbar = () => {

	const [button, setButton] = useState(false);

	const menuToggle = () => {
		setButton(!button)
	}



	return (
		<>
			<div className="container-fluid p-0 m-0 euro-navbar">
				<div className="row p-0 m-0">
					<div className="col-lg-4 col-md-12 d-md-flex justify-content-lg-start justify-content-md-center logoImgBox">
						<img src={logo} alt="Logo" />
					</div>

					<NavbarMenu />

					<div className="col-lg-2 col-md-2 d-flex p-0 m-0 justify-content-between dropdown-addcv">

						<div className="euro-dropdown">

							<i className="fa fa-language" id="euro-btn" aria-hidden="true" onClick={menuToggle}></i>

							<ul className={button ? "euro-dropdown-menu activMenu" : "euro-dropdown-menu"}>
								<li className="items"><Link class="euro-dropdown-item" to="/">Aze</Link></li>
								<li className="items"><Link class="euro-dropdown-item" to="/">Rus</Link></li>
								<li className="items"><Link class="euro-dropdown-item" to="/">Eng</Link></li>
							</ul>
						</div>

						<button className="addcv"><i class="fa fa-plus" aria-hidden="true"></i>CV</button>


					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
