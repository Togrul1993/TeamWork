import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class Job extends Component {
    render() {
        const { name, salary, type, location, image, experience } = this.props;

        

        return (
            <Router>
                <div className="col-md-6 my-3">
                    <div className="job">
                        <div className="d-flex">
                            <div className="job-image">
                                <img src={image} alt="job" />
                            </div>
                            <div className="job-overview">
                                <div className="job-title">
                                    <h4>{name}({experience} years experience)</h4>
                                </div>
                                <div className="job-salary">
                                    <i className="fas fa-money-bill-wave"></i>
                                    <span>$ {salary} </span>
                                </div>
                                <div className="job-location">
                                    <i className="fas fa-map-marker"></i>
                                    <span>{location}</span>
                                </div>
                            </div>
                        </div>
                        <div className="job-detail">
                            <div className="favorite">
                                <i className="far fa-heart"></i>
                            </div>
                            <div className="job-type">
                                {type}
                            </div>
                            <div className="view-more">
                                <a href="/vacancy-detail" >View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Job;
