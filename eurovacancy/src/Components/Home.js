import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import NavbarMobil from './NavbarMobil'
import NavbarMobilMenu from './NavbarMobilMenu'


const Home = () => {
	return (
		<div className="container-fluid p-0 home">
			<NavbarMobil />
			<NavbarMobilMenu />
			<Navbar />
			<Header />
			<Footer />
		</div>
	)
}

export default Home
