import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import NavbarMobil from './NavbarMobil'
import Header from './Header'
import { Container } from 'react-bootstrap'


const Advertising = () => {
	return (
		<>
			<div className="bg-light">
				<NavbarMobil />

				<Navbar />
				<Header />
				<Container className="d-flex flex-column text-left justify-content-around">
					<h2>Saytda reklam və ya elan.</h2>
					<h4>Eurovacancy.az – saytında iş elanları və ya reklam yerləşdirmək üçün bizimlə əlaqə yarada bilərsiniz.</h4>
					<h4>Əlaqə üçün:</h4>
					<h5>+994 12 437 10 71</h5>
					<h5>+994 51 700 01 07</h5>
					<h5>vacancyineurope@newera.az</h5>
				</Container>
				<Footer />
			</div>
		</>
	)
}

export default Advertising 
