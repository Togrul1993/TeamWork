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
			<div className="bg-light">
				<Navbar />
				<NavbarMobil />
				<Header />
				<HomeBodyVacancy />
				<Counters />
				<HomeBodyBlog />
				<Footer />
			</div>
		</>
	)
}

export default Home
