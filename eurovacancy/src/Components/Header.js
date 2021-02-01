import React from 'react'
import HeaderBody from './HeaderBody'
import HeaderFooter from './HeaderFooter'



const Header = () => {
	return (
		<div className=" euro-header">
			<div className="header-overlay"></div>
			<HeaderBody />
			<HeaderFooter />
		</div>
	)
}

export default Header
