import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { newcontext } from '../context';




const HomeBodyVacancy = () => {
	const context = useContext(newcontext);
	const jobs = (context.jobs)

	return (
		<>
			<div className="container">
				<h2>Vakansiyalar</h2>
				<hr className="border-dark" />
				<div className="row d-flex flex-row ">
					{
						jobs.map(jobs => (
							<div className="col-md-6 my-3">
								<div className="job">
									<div className="d-flex">
										<div className="job-image">
											<img src={jobs.image} alt="job" />
										</div>
										<div className="job-overview">
											<div className="job-title">
												<h4>{jobs.name}({jobs.experience} years experience)</h4>
											</div>
											<div className="job-salary">
												<i className="fas fa-money-bill-wave"></i>
												<span>$ {jobs.salary} </span>
											</div>
											<div className="job-location">
												<i className="fas fa-map-marker"></i>
												<span>{jobs.location}</span>
											</div>
										</div>
									</div>
									<div className="job-detail">
										<div className="favorite">
											<i className="far fa-heart"></i>
										</div>
										<div className="job-type">
											{jobs.type}
										</div>
										<div className="view-more">
											<Link to="/vacancies/vacancy-detail" >View More</Link>
										</div>
									</div>
								</div>
							</div>

						))
					}
				</div>
				<div className="row d-flex justify-content-center">
					<Link className="btn btn-primary" to="/vacancy">Daha Cox</Link>
				</div>
			</div>
		</>
	)
}

export default HomeBodyVacancy
