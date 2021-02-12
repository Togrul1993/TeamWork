import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

import Navbar from './Navbar';
import NavbarMobil from './NavbarMobil';

export default class AddCv extends Component {
    render() {
        return (
            <>
                <NavbarMobil />
                <Navbar />
                <Header />
                <div className="add-cv">
                    <div className="container">
                        <div className="form-header">
                            <h3>Job Details </h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 my-3">
                                <label>Name</label>
                                <input className="form-input" placeholder="Name" />
                            </div>
                            <div className="col-lg-6 col-sm-12 my-3">
                                <label>Lastname</label>
                                <input className="form-input" placeholder="Lastname" />
                            </div>
                            <div className="col-lg-6 col-sm-12 my-3">
                                <label>Category</label>
                                <select>
                                    <option>Web Developer</option>
                                    <option>Mobile Developer</option>
                                    <option>Web Designer</option>
                                    <option>Management</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-sm-12 my-3">
                                <label>Experience</label>
                                <select>
                                    <option>Less Than 1 year</option>
                                    <option>1-3</option>
                                    <option>3-5</option>
                                    <option>More Than 5 years</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-sm-12 my-3">
                                <label>Education</label>
                                <select>
                                    <option>Secondary</option>
                                    <option>Subbachelor</option>
                                    <option>Bachelor</option>
                                    <option>Master</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-sm-12 my-3">
                                <label>Type</label>
                                <select>
                                    <option>Full Time</option>
                                    <option>Part Time</option>
                                    <option>Freelance</option>
                                    <option>Remote</option>
                                </select>
                            </div>
                            <div className="col-lg-12 my-3">
                                <label>Education</label>
                                <textarea placeholder="About Education" rows="5"></textarea>
                            </div>
                            <div className="col-lg-12 my-3">
                                <label>Skills</label>
                                <textarea placeholder="About Skills" rows="5"></textarea>
                            </div>
                            <div className="col-lg-12 my-3">
                                <label>Experience</label>
                                <textarea placeholder="About Experience" rows="5"></textarea>
                            </div>
                        </div>
                        <button className="btn-post">Post a Job</button>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
