import React from 'react'
import HeaderBody from './HeaderBody'
import HeaderFooter from './HeaderFooter'
import '../Asests/Header.scss'


const Header = () => {
	return (
		<div className=" euro-header" id="header">
			<div className="header-overlay"></div>
			<HeaderBody />
			<HeaderFooter />
		</div>
	)
}

export default Header
