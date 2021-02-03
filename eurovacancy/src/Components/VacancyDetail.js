import React, { Component } from 'react';


class VacancyDetail extends Component {
    render() {
        return (
            <div className="vacancy-detail my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="job-about">
                                <div className="job-description">
                                    <h2>job description</h2>
                                    <p className="job-text">
                                        Google is and always will be an engineering company. We hire people with a broad set of ical skills who are ready to tackle some of technology's greatest challenges and make an impact on millions, if not billions, of users. At Google, engineers not only revolutionize search, they routinely work on massive scalability and storage solutions, large-scale applications and rely new platforms for developers around the world. From AdWords to Chrome, Android to Ye, Social to Local, Google engineers are changing the world.
                            </p>
                                </div>
                                <div className="job-description">
                                    <h2>responsibilities</h2>
                                    <div className="job-text">
                                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit.</p>
                                        <ul>
                                            <li>Build next-generation web applications with a focus on the client side.</li>
                                            <li>Redesign UI's, implement new UI's, and pick up Java as necessary.</li>
                                            <li>Explore and design dynamic and compelling consumer experiences.</li>
                                            <li>Design and build scalable framework for web applications.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="job-description">
                                    <h2>MINIMUM QUALIFICATIONS</h2>
                                    <div className="job-text">
                                        <ul>
                                            <li>BA/BS degree in a technical field or equivalent practical experience.</li>
                                            <li>2 years of relevant work experience in software development.</li>
                                            <li>Programming experience in C, C++ or Java.</li>
                                            <li>Experience with AJAX, HTML and CSS.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="job-description">
                                    <h2>how to apply</h2>
                                    <div className="job-text">
                                        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="job-single-overview">
                                <div className="overview-header">
                                    <h4>job overview</h4>
                                </div>
                                <div className="job-title py-5">
                                    <div className="job-image">
                                        <img src="..\images\job_post_img1.jpg" alt="img" />
                                    </div>
                                    <h4>Frontend Developer(1-2 Years Experience)</h4>
                                    <div className="row mt-5 justify-content-center">
                                        <div className="job-favorite">
                                            <i className="far fa-heart"></i>
                                        </div>
                                        <div className="job-type">
                                            part time
                                        </div>
                                    </div>
                                </div>
                                <div className="job-params my-5">
                                    <div className="params-wrap my-5">
                                        <div className="params-icon">
                                            <i className="fas fa-calendar-alt"></i>
                                        </div>
                                        <div className="params">
                                            <ul>
                                                <li>Data Posted:</li>
                                                <li>02 February, 2021</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="params-wrap my-5">
                                        <div className="params-icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="params">
                                            <ul>
                                                <li>Location:</li>
                                                <li>Baku</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="params-wrap my-5">
                                        <div className="params-icon">
                                            <i className="fas fa-info-circle"></i>
                                        </div>
                                        <div className="params">
                                            <ul>
                                                <li>Job Title:</li>
                                                <li>Frontend Developer</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="params-wrap my-5">
                                        <div className="params-icon">
                                            <i className="far fa-clock"></i>
                                        </div>
                                        <div className="params">
                                            <ul>
                                                <li>Hours:</li>
                                                <li>40h / Week</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="params-wrap my-5">
                                        <div className="params-icon">
                                            <i className="fas fa-money-bill-wave"></i>
                                        </div>
                                        <div className="params">
                                            <ul>
                                                <li>Salary:</li>
                                                <li>$1000</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="params-wrap my-5">
                                        <div className="params-icon">
                                            <i className="fas fa-th-large"></i>
                                        </div>
                                        <div className="params">
                                            <ul>
                                                <li>Category:</li>
                                                <li>Web Developer</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="params-wrap my-5">
                                        <div className="params-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="params">
                                            <ul>
                                                <li>Experience:</li>
                                                <li>1-2 Years</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VacancyDetail;
