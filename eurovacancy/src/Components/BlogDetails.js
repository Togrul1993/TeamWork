import React, { Component } from 'react'
import '../Asests/blog.css'
import Header from './Header'
import Footer from './Footer'
import img from '../Image/blog.jpg'
import NavbarMobil from './NavbarMobil'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'


export default class BlogDetails extends Component {
    render() {
        return (
            <div>
                <NavbarMobil />
                <Navbar />
                <Header />
                <Footer />
                <div className="columns w-row">
                    <div className="w-col w-col-9">
                        <h1 className="heading-2">Blog Kateqoriyalar<br /></h1>
                        <section id="feature-section" className="vacan feature-section">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div><img
                                    src={img}
                                    loading="lazy" sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, 73vw"
                                    alt="" className="image" />
                                    <h3 className="heading"><Link to="/blogdetails">Hey Seeker, It’s Time to job Now!</Link></h3>
                                    <div className="feed">
                                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                                        enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
                                        nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
                                imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                        <span>Share : </span><i className="fab fa-facebook-square icon"></i><i className="fab fa-instagram icon"></i>
                                    </div>
                                </div>

                            </div>
                            <div>


                                <h4 className="heading-3">Axtarış</h4>
                                <form id="form">
                                    <input type="search" id="query" name="q" placeholder="Axtar..." />

                                    <i className="fa fa-search"></i>
                                </form>
                            </div>

                            <div className="left-category">
                                <h4 className="heading-4">Kateqoriya üzrə işlər<br /></h4>
                            </div>
                            <ul className="list">
                                <li className="list-item">Graphic Designer (214)</li>
                                <li className="list-item-2">Engineering Jobs (514)</li>
                                <li className="list-item-3">Mainframe Jobs (554)</li>
                                <li className="list-item-3">Mainframe Jobs (554)</li>
                                <li className="list-item-3">Mainframe Jobs (554)</li>
                                <li className="list-item-3">Mainframe Jobs (554)</li>
                                <li className="list-item-3">Mainframe Jobs (554)</li>
                            </ul>

                        </section>
                    </div>
                </div>
            </div>
        )
    }
}