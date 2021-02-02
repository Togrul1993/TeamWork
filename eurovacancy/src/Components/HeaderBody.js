import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBody = () => {
	return (
		<>
			<div className="euro-header-body">

				<h3 className="header-body-title">3,000+ Browse Jobs</h3>

				<p className="header-body-text">Find Jobs, Employment & Career Opportunities</p>


				<form>
					<input className="euro-header-body-search" type="search" placeholder="Jobs Search" />

					<select className="euro-header-body-location">
						<option>Location</option>
						<option>Baki</option>
						<option>Seki</option>
						<option>Gence</option>
						<option>Qax</option>
					</select>


					<select className="euro-header-body-experience">
						<option>Location</option>
						<option>Baki</option>
						<option>Seki</option>
						<option>Gence</option>
						<option>Qax</option>
					</select>

					<button className="euro-header-body-submit" type="submit">Search</button>
				</form>


				<div className="header-body-keys">
					<i class="fa fa-key" aria-hidden="true"></i>
					<h6>Trending Keywords  :</h6>
					<Link to="/" className="header-body-link-job">ui designer,</Link>
					<Link to="/" className="header-body-link-job">developer,</Link>
					<Link to="/" className="header-body-link-job">seniorit,</Link>
					<Link to="/" className="header-body-link-job">company,</Link>
					<Link to="/" className="header-body-link-job">design,</Link>
					<Link to="/" className="header-body-link-job">call center</Link>

				</div>
			</div>
		</>
	)
}

export default HeaderBody
