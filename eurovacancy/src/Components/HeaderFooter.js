import React, { useState } from 'react'

const HeaderFooter = () => {


	const [jobs] = useState([
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
			<div className="container-fluid pr-4 pl-4 d-flex justify-content-center">
				<div className="row d-flex justify-content-around w-75">
					{
						jobs.map((job, id) => (
							<div className="col-lg-2 col-md-4 col-sm-6 col-6 p-0" key={id}>
								<div className="euro-header-jobs d-flex flex-column bg-primary align-items-center w-100">
									<i className={job.icon}></i>
									<h5>{job.title}</h5>
									<p>{job.text}</p>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</>
	)
}

export default HeaderFooter
