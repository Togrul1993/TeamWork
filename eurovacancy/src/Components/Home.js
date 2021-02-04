import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import NavbarMobil from './NavbarMobil'
import HomeBodyVacancy from './HomeBodyVacancy'
import HomeBodyBlog from './HomeBodyBlog'
import Counters from './Counters'



const Home = () => {
	return (
		<>
			<Navbar />
			<NavbarMobil />
			<Header />
			<HomeBodyVacancy />
			<Counters />
			<HomeBodyBlog />
			<Footer />
		</>
	)
}

export default Home
