import React from 'react';
import logo_2 from '../Image/logo.png'

const NavbarMobil = () => {
	return (
		<>
			<div className="container-fluid euro-nav-mobil">
				<div className="row d-flex justify-content-between">

					<div className="col-2 mobil-logo">
						<img src={logo_2} alt="Logo Mobil" />
					</div>

					<div className="col-2 bars">
						<div className="bars-items">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>

				</div>
			</div>

		</>
	)
}

export default NavbarMobil
