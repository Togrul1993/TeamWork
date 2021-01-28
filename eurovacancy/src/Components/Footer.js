import React from 'react'
import footer from '../Image/euro-7.png'

const Footer = () => {
	return (
		<footer className="container-fluid">
			<img src={footer} />

			<div>

				<div className="link-share">

				</div>

				<from className="form">
					<input type="text" placeholder="Ad / Soyad" />
					<input type="email" placeholder="Email" />
					<textarea rows="5" cols="15"></textarea>
					<button type="submit">Gonder</button>
				</from>
			</div>
		</footer>
	)
}

export default Footer
