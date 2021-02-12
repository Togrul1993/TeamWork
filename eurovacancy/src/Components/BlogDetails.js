import React, { useState } from 'react';

import { Col, Container, Row, Image } from 'react-bootstrap';
import BlogData from '../app/bloh.json';
import '../Asests/blog.css'
import Header from './Header'
import Footer from './Footer'
import NavbarMobil from './NavbarMobil'
import Navbar from './Navbar';



const BlogDetails = () => {



    return (
        <>
            <NavbarMobil />
            <Navbar />
            <Header />

            <Container>
                <Row>


                    <Col lg={12} >
                        <Image className="border-dark" src="https://www.adjuice.co.uk/wp-content/uploads/2012/01/Blog-image.jpg" width="80%" alt="" />
                        <h2>Lorem Ipsum 14</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros</p>
                    </Col>


                </Row>
            </Container>


            <Footer />
        </>
    )
}

export default BlogDetails;