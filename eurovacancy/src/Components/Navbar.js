import React from 'react'
import { Link } from 'react-router-dom'
import '../Asests/Navbar.css'
import logo from '../Image/logo.png'
import NavbarMenu from './NavbarMenu'


const Navbar = () => {
	console.log(!(101 > 100))
	return (
		<>
			<div className="container-fluid p-0 m-0 euro-navbar">
				<div className="row">
					<div className="col-lg-5 col-md-12 logoImgBox">
						<img src={logo} alt="Logo" />
					</div>

					<NavbarMenu />

					<div className="col-lg-2 col-md-2 d-flex justify-content-between dropdown-addcv">

						<div>
							<h6>Dil Secimi</h6>
							<div className="dropdown-items">
								<Link to="/" className="dropdown-item"></Link>
								<Link to="/" className="dropdown-item"></Link>
								<Link to="/" className="dropdown-item"></Link>
							</div>
						</div>

						<button className="addcv">CV yerləşdir</button>

					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
