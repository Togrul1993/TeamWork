import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HeaderFooter = () => {


	const [jobsplan] = useState([
		{
			id: "1",
			icon: "fa fa-code",
			title: "Developer",
			text: "(240 jobs)"
		},
		{
			id: "1",
			icon: "fa fa-laptop",
			title: "Technology",
			text: "(340 jobs)"
		},
		{
			id: "1",
			icon: "fa fa-bar-chart",
			title: "Accounting",
			text: "(140 jobs)"
		},
		{
			id: "1",
			icon: "fa fa-medkit",
			title: "Medical",
			text: "(340 jobs)"
		},
		{
			id: "1",
			icon: "fa fa-university",
			title: "Government",
			text: "(90 jobs)"
		},
		{
			id: "1",
			icon: "fa fa-th-large",
			title: "All Jobs",
			text: "(2000+ jobs)"
		}
	])

	return (
		<>
			<div className="container-fluid pr-4 pl-4 d-flex justify-content-center euro-header-footer">
				<div className="row d-flex justify-content-around w-75">
					{
						jobsplan.map((job, id) => (
							<Link className="col-lg-2 col-md-4 col-sm-6 col-6 p-0 euro-header-footer-col" key={id}>
								<div className="euro-header-jobs">
									<i className={job.icon}></i>
									<h5>{job.title}</h5>
									<p>{job.text}</p>
								</div>
							</Link>
						))
					}
				</div>
			</div>
		</>
	)
}

export default HeaderFooter
