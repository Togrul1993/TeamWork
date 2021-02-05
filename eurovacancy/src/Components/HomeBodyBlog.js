import React, { useState } from 'react'
import { Image, Col, Container, Row, Card, Button } from 'react-bootstrap'
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

							<Col lg={3} md={6} xs={12} key={id} className="m-3">
								<Card style={{ width: '18rem' }}>
									<Card.Img variant="top" src={blog.img} />
									<Card.Body>
										<Card.Title>{overviewTrim(blog.title, 13)}</Card.Title>
										<Card.Text>
											{overviewTrim(blog.txt, 80)}
										</Card.Text>
										<Card.Footer className="d-flex justify-content-between">
											<Button href="/blogdetals" variant="primary">Etrafli</Button>
											<Button variant="primary" className="fa fa-facebook"></Button>
											<Button variant="primary" className="fa fa-whatsapp"></Button>
										</Card.Footer>
									</Card.Body>
								</Card>
							</Col>
						))
					}

					<Col lg={12} className="d-flex justify-content-center mt-3 mb-3">
						<Button href="/blog" variant="primary">Daha Cox</Button>
					</Col>
				</Row>

			</Container>

		</>
	)
}

export default HomeBodyBlog
