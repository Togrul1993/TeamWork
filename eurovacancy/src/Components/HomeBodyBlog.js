import React, { useState } from 'react'
import { Image, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
						blogitems.map(job => (
							<Col lg={4} className="d-flex flex-column mb-3">
								<Image src={job.img} />
								<h3>{job.title}</h3>
								<p>{job.txt}</p>
							</Col>
						))
					}
				</Row>
			</Container>

		</>
	)
}

export default HomeBodyBlog
