import React, { useState } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import BlogData from '../app/bloh.json';


const HomeBodyBlog = () => {

	const data = (BlogData.blogitems);


	const blogs = data.sort((a, b) => { return a.id < b.id ? 1 : a.id > b.id ? -1 : 0 }).splice(0, 3);



	const overviewTrim = (string, maxstring) => {
		if (!string) return null;
		if (string.length <= maxstring) return string;
		return `${string.substring(0, maxstring)} ...`;
	};

	return (
		<>
			<Container className="home-bodyblog-container">

				<h3>Blog</h3>
				<hr className="border-dark" />

				<Row id="blog" className="d-flex justify-content-lg-around justify-content-md-center justify-content-sm-center justify-content-xl-center home-bodyblog-row ">

					{
						blogs.map((blog, id) => (

							<Col lg={3} md={6} xs={12} key={id} className=" mb-3">
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
