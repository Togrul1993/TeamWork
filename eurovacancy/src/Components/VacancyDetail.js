import React, { Component } from 'react';
import '../Asests/vacancy-detail.css';


class VacancyDetail extends Component {
    render() {
        function click(e) {
            let selected = document.querySelector('.selected-image img');
            let src = e.target.getAttribute('src');
            selected.setAttribute('src', src);
        }
        const hover = () => {
            document.querySelector('.image-settings').style.display = 'block'
        }
        const nonHover = () => {
            document.querySelector('.image-settings').style.display = 'none'
        }
        const scale = () => {
        }
        return (
            <div className="vacancy-detail my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
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

                            <div className="job-about">
                                <div className="job-description">
                                    <h2>job images</h2>
                                    <div className="job-images">
                                        <div className="selected-image" onMouseEnter={hover} onMouseLeave={nonHover}>
                                            <img src="..\images\job_post_img1.jpg" alt="job-1" />
                                            <div className="image-settings">
                                                <div className="scale" onClick={scale}>
                                                    <i className="fas fa-plus"></i>
                                                </div>
                                                <div className="non-scale">
                                                    <i className="fas fa-minus"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image-list">
                                            <div className="single-image" onClick={click}>
                                                <img src="..\images\job_post_img1.jpg" alt="job-1" />
                                            </div>
                                            <div className="single-image" onClick={click}>
                                                <img src="..\images\job_post_img2.jpg" alt="job-2" />
                                            </div>
                                            <div className="single-image" onClick={click}>
                                                <img src="..\images\job_post_img3.jpg" alt="job-3" />
                                            </div>
                                            <div className="single-image" onClick={click}>
                                                <img src="..\images\job_post_img4.jpg" alt="job-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                            </div>
                            <div className="job-share">
                                <p style={{ textTransform: 'uppercase', fontWeight: 'bold', marginTop: '15px' }}>share:</p>
                                <div className="sosial-icons">
                                    <div className="facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </div>
                                    <div className="twitter">
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                    <div className="linkedin">
                                        <i className="fab fa-linkedin-in"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="related-jobs">
                                <div className="job-description">
                                    <h2>related jobs</h2>
                                </div>
                                <div className="job my-5">
                                    <div className="d-flex">
                                        <div className="job-image">
                                            <img src="..\images\job_post_img1.jpg" alt="job" />
                                        </div>
                                        <div className="job-overview">
                                            <div className="job-title">
                                                <h4>Frontend Developer (1-2 years experience)</h4>
                                            </div>
                                            <div className="job-salary">
                                                <i className="fas fa-money-bill-wave"></i>
                                                <span>$1000 </span>
                                            </div>
                                            <div className="job-location">
                                                <i className="fas fa-map-marker"></i>
                                                <span>Baku</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-detail">
                                        <div className="favorite">
                                            <i className="far fa-heart"></i>
                                        </div>
                                        <div className="job-type">
                                            full time
                                    </div>
                                        <div className="view-more">
                                            View More
                                        </div>
                                    </div>
                                </div>
                                <div className="job my-5">
                                    <div className="d-flex">
                                        <div className="job-image">
                                            <img src="..\images\job_post_img2.jpg" alt="job" />
                                        </div>
                                        <div className="job-overview">
                                            <div className="job-title">
                                                <h4>Backend Developer (1-2 years experience)</h4>
                                            </div>
                                            <div className="job-salary">
                                                <i className="fas fa-money-bill-wave"></i>
                                                <span>$1500 </span>
                                            </div>
                                            <div className="job-location">
                                                <i className="fas fa-map-marker"></i>
                                                <span>Baku</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-detail">
                                        <div className="favorite">
                                            <i className="far fa-heart"></i>
                                        </div>
                                        <div className="job-type">
                                            full time
                                    </div>
                                        <div className="view-more">
                                            View More
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="job-single-overview">
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
                                            <i className="fas fa-calendar-alt"></i>
                                        </div>
                                        <div className="params">
                                            <ul>
                                                <li>Last Date:</li>
                                                <li>02 March, 2021</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="params-wrap my-5">
                                        <div className="params-icon">
                                            <i className="fas fa-globe-europe"></i>
                                        </div>
                                        <div className="params">
                                            <ul>
                                                <li>Country:</li>
                                                <li>Azerbaijan</li>
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
                                    <div className="params-wrap my-5">
                                        <div className="params-icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="params">
                                            <ul>
                                                <li>Contact:</li>
                                                <li>0123456789</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button className="apply" data-toggle="modal" data-target="#exampleModal">
                                        apply now
                                    </button>
                                    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Apply</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <input className="form-control my-2" placeholder="Name"/>
                                                    <input className="form-control my-2" placeholder="Lastname"/>
                                                    <input className="form-control my-2" placeholder="Email"/>
                                                    <textarea className="form-control" rows="5" placeholder="Write message..."></textarea>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="apply">Apply now</button>
                                                </div>
                                            </div>
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
