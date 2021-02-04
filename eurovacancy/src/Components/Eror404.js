import React from 'react'
import { Container } from 'react-bootstrap'

import Navbar from './Navbar'
import NavbarMobil from './NavbarMobil'


const Eror404 = () => {
	return (
		<>
			<NavbarMobil />
			<Navbar />

			<Container fluid className="bg-dark p-5" style={{ height: "100vh" }}>
				<h3 className="text-danger">Error / Yalnis Seyfedesen </h3>
			</Container>

		</>
	)
}

export default Eror404
