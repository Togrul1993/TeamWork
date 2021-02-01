import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import NavbarMobil from './NavbarMobil'



const Home = () => {
	return (
		<div className="container-fluid p-0 home">
			<NavbarMobil />
			<Navbar />
			<Header />
			<Footer />
		</div>
	)
}

export default Home
