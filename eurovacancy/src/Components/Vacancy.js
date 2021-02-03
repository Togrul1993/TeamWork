import React, { Component } from 'react';
import Consumer from '../context';
import Jobs from './Jobs';
import '../Asests/vacancy.css'
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import NavbarMobil from './NavbarMobil';

class Vacancy extends Component {
    render() {

        return (

            <Router>
                <NavbarMobil />
                <Navbar />
                <Header />
                <div className="vacancy-wrap my-5 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-12">
                                <div className="sorting">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="sort my-2">
                                                <select className="form-select">
                                                    <option value="new">Newest</option>
                                                    <option value="old">Oldest</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="search my-2">
                                                <input className="form-control" placeholder="Search keywords" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-listing">
                                    <div className="row">
                                        <Jobs />
                                    </div>
                                </div>
                                <div className="enumerate">
                                    <ul>
                                        <li>prev</li>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>next</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="search-by">
                                    <div className="by-category my-3">
                                        <div className="search-header">
                                            <p>Jobs by Category</p>
                                        </div>
                                        <div className="categories">
                                            <ul>
                                                <Consumer>
                                                    {
                                                        value => {
                                                            const { categories } = value;
                                                            return (
                                                                categories.map(category => {
                                                                    return (
                                                                        <li>
                                                                            <label>
                                                                                {category.name}
                                                                                <input type="checkbox" />
                                                                                <span className="checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                    )
                                                                })
                                                            )
                                                        }
                                                    }
                                                </Consumer>

                                            </ul>
                                        </div>
                                    </div>

                                    <div className="by-location my-3">
                                        <div className="search-header">
                                            <p>Jobs by Locations</p>
                                        </div>
                                        <div className="locations">
                                            <ul>
                                                <Consumer>
                                                    {
                                                        value => {
                                                            const { locations } = value;
                                                            return (
                                                                locations.map(location => {
                                                                    return (
                                                                        <li>
                                                                            <label>
                                                                                {location.name}
                                                                                <input type="checkbox" />
                                                                                <span className="checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                    )
                                                                })
                                                            )
                                                        }
                                                    }
                                                </Consumer>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="by-salary my-3">
                                        <div className="search-header">
                                            <p>Jobs by Salary</p>
                                        </div>
                                        <div className="salaries">
                                            <ul>
                                                <li>
                                                    <label>
                                                        0-500
                                                <input type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        500-1000
                                                <input type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        1000-1500
                                                <input type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        1500-2000
                                                <input type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label>
                                                        2000+
                                                <input type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="by-type my-3">
                                        <div className="search-header">
                                            <p>Jobs by Type</p>
                                        </div>
                                        <div className="types">
                                            <ul>
                                                <Consumer>
                                                    {
                                                        value => {
                                                            const { types } = value;
                                                            return (
                                                                types.map(type => {
                                                                    return (
                                                                        <li>
                                                                            <label>
                                                                                {type.name}
                                                                                <input type="checkbox" />
                                                                                <span className="checkmark"></span>
                                                                            </label>
                                                                        </li>
                                                                    )
                                                                })
                                                            )
                                                        }
                                                    }
                                                </Consumer>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Router>
        );
    }
}

export default Vacancy;