import React, { useState } from 'react'
import { Image, Col, Container, Row } from 'react-bootstrap'
import img from '../Image/blog.jpg'
import { Link } from 'react-router-dom'


const HomeBodyBlog = () => {

	const [blogitems] = useState([
		{
			id: 1,
			img: img,
			title: "Lorem Ipsum 1",
			txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla"
		},
		{
			id: 2,
			img: img,
			title: "Lorem Ipsum 2",
			txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla"
		},
		{
			id: 3,
			img: img,
			title: "Lorem Ipsum 3",
			txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla"
		},
		{
			id: 4,
			img: img,
			title: "Lorem Ipsum 4",
			txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros"
		},
		{
			id: 5,
			img: img,
			title: "Lorem Ipsum 5",
			txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros"
		}


	])

	const blogs = blogitems.sort((a, b) => { return a.id < b.id ? 1 : a.id > b.id ? -1 : 0 }).splice(0, 3)



	const overviewTrim = (string, maxstring) => {
		if (!string) return null;
		if (string.length <= maxstring) return string;
		return `${string.substring(0, maxstring)} ...`
	}

	return (
		<>
			<Container className="home-bodyblog-container">

				<h3>Blog</h3>
				<hr className="border-dark" />

				<Row id="blog" className="d-flex justify-content-center home-bodyblog-row">

					{
						blogs.map((blog, id) => (
							<Col lg={3} key={id} className="d-flex flex-column mb-3 m-1 p-0 border border-dark home-bodyblog-col">
								<Image src={blog.img} />
								<h3 className="p-1">{overviewTrim(blog.title, 13)}</h3>
								<p className="p-1">{overviewTrim(blog.txt, 80)}</p>
								<hr className="border-dark p-0" />
								<div className="d-flex flex-row flex-nowrap justify-content-between mt-1 mb-1 p-1 home-bodyblog-shares">

									<Link to="/blog" className="reade-more  text-decoration-none home-bodyblog-btn">Etrafli</Link>

									<div className="d-flex flex-row flex-nowrap justify-content-between w-25 p-1 home-bodyblog-share">
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
