import React from 'react'
import HeaderBody from './HeaderBody'
import HeaderFooter from './HeaderFooter'
import Navbar from './Navbar'
import '../Asests/Header.css'


const Header = () => {
	return (
		<div className=" euro-header">
			<div className="header-overlay"></div>
			<Navbar />
			<HeaderBody />
			<HeaderFooter />

		</div>
	)
}

export default Header
