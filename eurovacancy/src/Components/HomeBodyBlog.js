import React, { useState } from 'react'
import { Image, Col, Container, Row } from 'react-bootstrap'
import img from '../Image/blog.jpg'


const HomeBodyBlog = () => {

	const [blogitems] = useState([
		{
			img: img,
			title: "Lorem Ipsum 1",
			txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla"
		},
		{
			img: img,
			title: "Lorem Ipsum 1",
			txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla"
		},
		{
			img: img,
			title: "Lorem Ipsum 1",
			txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla"
		}

	])
	return (
		<>
			<Container>

				<h3>Blog</h3>
				<hr className="border-dark" />
				<Row>
					{
<<<<<<< HEAD
						blogitems.map(job => (
							<Col lg={4} className="d-flex flex-column mb-5 p-1">
=======
						blogitems.map((job,id) => (
							<Col lg={4} key={id}className="d-flex flex-column mb-3">
>>>>>>> f1f144f5cd54ed278ff31984f552dce069d9c8b3
								<Image src={job.img} />
								<h3 className="p-2">{job.title}</h3>
								<p className="p-2">{job.txt}</p>
								<div className="d-flex flex-row flex-nowrap justify-content-between mt-2 mb-2 p-2">
									<Link to="/" className="reade-more  text-decoration-none">Etrafli</Link>

									<div className="d-flex flex-row flex-nowrap justify-content-between w-25 p-3">
										<Link to="/" className="fa fa-facebook text-decoration-none" aria-hidden="true"></Link>
										<Link to="/" className="fa fa-whatsapp  text-decoration-none " aria-hidden="true"></Link>
									</div>
								</div>
							</Col>
						))
					}
				</Row>
			</Container>

		</>
	)
}

export default HomeBodyBlog
