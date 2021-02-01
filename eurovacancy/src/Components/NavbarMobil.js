import React, { useState } from 'react';
import logo_2 from '../Image/logo.png'
import NavbarMobilMenu from './NavbarMobilMenu';

const NavbarMobil = () => {

	const [bars, setBars] = useState(false)

	const barsClick = () => {
		setBars(!bars)
		console.log("Bars Clisir")
	}


	return (
		<>
			<div className="container-fluid euro-nav-mobil">
				<div className="row d-flex justify-content-between">

					<div className="col-2 mobil-logo">
						<img src={logo_2} alt="Logo Mobil" />
					</div>

					<div className="col-2 bars">
						<div className="bars-items" onClick={barsClick}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>

				</div>
			</div>
			<NavbarMobilMenu bars={bars} barsClick={barsClick} />
		</>
	)
}

export default NavbarMobil
