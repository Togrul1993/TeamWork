import React, { useState } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import BlogData from '../app/bloh.json';
import '../Asests/blog.css';
import Header from './Header';
import Footer from './Footer';
import NavbarMobil from './NavbarMobil';
import Navbar from './Navbar';
import ReactPagenate from 'react-paginate';



const Blog = () => {

    const data = (BlogData.blogitems.splice(0, 50));


    const overviewTrim = (string, maxstring) => {
        if (!string) return null;
        if (string.length <= maxstring) return string;
        return `${string.substring(0, maxstring)} ...`;
    };


    const [pagenumber, setPageNumber] = useState(0);
    const pageitems = 6;
    const pageVisited = pagenumber * pageitems;
    const blogdata = data.slice(pageVisited, pageVisited + pageitems).sort((a, b) => { return a.id < b.id ? 1 : a.id > b.id ? -1 : 0 })

    const displayPages = blogdata.map((blogs, id) => {
        return (

            <Col lg={4} md={6} xs={12} key={id} className="mb-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={blogs.img} />
                    <Card.Body>
                        <Card.Title>{overviewTrim(blogs.title, 14)}</Card.Title>
                        <Card.Text>
                            {overviewTrim(blogs.txt, 80)}
                        </Card.Text>
                        <Card.Text className="text-right">12 saat evvel</Card.Text>
                        <Card.Footer className="d-flex justify-content-between">
                            <Button href="/blogdetals" variant="primary">Etrafli</Button>
                            <Button variant="primary" className="fa fa-facebook"></Button>
                            <Button variant="primary" className="fa fa-whatsapp"></Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Col>


        )
    })


    const pageCount = Math.ceil(data.length / pageitems);


    return (
        <>
            <NavbarMobil />
            <Navbar />
            <Header />


            <Container className="home-bodyblog-container">
                <h3>Blog</h3>
                <hr className="border-dark" />
                <Row id="blog" className="d-flex justify-content-lg-around justify-content-md-center justify-content-sm-center justify-content-xl-center home-bodyblog-row ">


                    {displayPages}

                    <ReactPagenate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                    />

                    <Col lg={12} className="d-flex justify-content-center mt-3 mb-3">
                        <Button href="/blog" variant="primary">Daha Cox</Button>
                    </Col>
                </Row>
            </Container>




            <Footer />
        </>

    );
};
export default Blog;