import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logofooter from '../Image/logo.png'
import '../Asests/Footer.scss'

const Footer = () => {

	return (
		<>
			<div className="container-fluid euro-footer">
				<div className="euro-footer-logo">
					<img src={logofooter} alt="Footer Logo" />
				</div>

				<div className="row d-flex justify-content-start">

					<div className="col-lg-4 col-md-4 col-sm-6 col-12 euro-footer-about">
						<h3 className="euro-footer-about-title">Haqqimizda</h3>
						<p className="euro-footer-about-text">Lorem Ipsum is simply dummy text
						of the printing and typesetting
						industry. Lorem Ipsum has been
						the industry's standard dummy
						text ever since the 1500s
						</p>
						<Link to="/about" className="euro-footer-read-more ">Etrafli</Link>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-6 col-12 euro-footer-menu">
						<h3 className="euro-footer-menu-title">Menu</h3>
						<NavLink to="/" exact className="euro-footer-menu-link" activeClassName="footer-active-link">AnaSeyfe</NavLink>
						<NavLink to="/vacancies" className="euro-footer-menu-link" activeClassName="footer-active-link">Vakansiyalar</NavLink>
						<NavLink to="/blog" className="euro-footer-menu-link" activeClassName="footer-active-link">Blog</NavLink>
						<NavLink to="/advertising" className="euro-footer-menu-link" activeClassName="footer-active-link">Reklam</NavLink>
						<NavLink to="/rules" className="euro-footer-menu-link" activeClassName="footer-active-link">Qaydalar</NavLink>
						<NavLink to="/contact" className="euro-footer-menu-link" activeClassName="footer-active-link">Elaqe</NavLink>

					</div>

					<div className="col-lg-4 col-md-4 col-sm-6 col-12 euro-footer-sticker">
						<h3 className="euro-footer-sticker-title">Elan Növləri</h3>
						<Link to="/" className="euro-footer-sticker-link">Full-time işlər</Link>
						<Link to="/" className="euro-footer-sticker-link">Part-time işlər</Link>
						<Link to="/" className="euro-footer-sticker-link">Frilans işlər</Link>
						<Link to="/" className="euro-footer-sticker-link">Təcrübə Proqramı</Link>
					</div>

				</div>

				<hr className="border-dark p-0 m-0 w-100" />

				<div className="row euro-footer-share">
					<div className="col-lg-4 col-md-6 col-6 euro-footer-share-copy-right">
						<p>All Rights Reserved.</p>
					</div>

					<div className="col-lg-4 euro-footer-angle-up">
						<Link to="#header" className="fa fa-angle-up" aria-hidden="true"></Link>
					</div>


					<div className="col-lg-4 col-md-6 col-6 euro-footer-share">

						<Link to="/" className="share-link"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
						<Link to="/" className="share-link"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
						<Link to="/" className="share-link"><i className="fa fa-whatsapp" aria-hidden="true"></i></Link>
					</div>

				</div>
			</div>
		</>
	)
}

export default Footer
