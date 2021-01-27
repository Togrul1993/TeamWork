import { useState } from 'react'
import '../Asests/Navbar.scss'

const Navbar = () => {

	const [nav] = useState(["AnaSeyfe", "Blog", "Haqqimizda", "Reklam", "Qaydalar"])

	return (
		<>
			<ul>
				{
					nav.map((nav) => (
						<li>{nav}</li>
					))
				}

			</ul>
		</>
	)
}

export default Navbar
