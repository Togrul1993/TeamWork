import React, { Component } from 'react';
import Consumer from '../context';

export default class About extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="how">
                        <div className="col-lg-6">
                            <div className="left-side">
                                <div className="description">
                                    <h2>How we do it</h2>
                                </div>
                                <div className="about">
                                    <p>
                                        Proin gravida nibh vel velit auctor aliquet. aks Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem.consequat ipsum, nec sagittis sem nibh id elit.Donec vestibulum justo a diam ultricies. pel lentesque. Quisque mattis diam vel.
                                </p>
                                    <p>
                                        Lorem Ipsum has been the industry's standard dummy text ever sincer they 1500s, when an unknown printer took and galley of type and scrambled. nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                                </p>
                                    <ul>
                                        <li>
                                            <div className="listmark"></div>
                                        We sell all over the world.
                                        </li>
                                        <li>
                                            <div className="listmark"></div>
                                        Satisfaction or money refund guaranteed.
                                    </li>
                                        <li>
                                            <div className="listmark"></div>
                                        Lifetime updates & support.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-side">
                                <img src="..\images\register_bg.jpg" alt="about" />
                            </div>
                        </div>
                    </div>
                    <div className="why">
                        <div className="description">
                            <h2>why we do it</h2>
                        </div>
                        <div className="about">
                            <p>Proin gravida nibh vel velit auctor aliquet. aks Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem.consequat ipsum,rmentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit sum, nec sagittis sem.consequat ipsum,rmentum nunc. Etiam pharetra, mauris egestas quam, ut aliquam massa nisl quis neque. Suspendissenec sagittis sem.conse nec sagittis sem nibh id elit.Donec vesquat ipsum, nec sa tibulum justo a diam ultricies. pel lentesque. Quisque mattis diam vel.</p>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever sincer they 1500s, when an unknown printer took and galley onsequat ipsum, orbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad a diam ultricie of type and scrambled. nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        </div>
                    </div>
                    <div className="blog-side">
                        <div className="description">
                            <h2>carrier advice</h2>
                        </div>
                        <div className="blog-list owl-carousel">

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="blog-image">
                                        <img src="..\images\car_img1.jpg" alt="blog" />
                                    </div>
                                    <div className="blog-body">
                                        <div className="blog-date">
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>01 Feb, 2021</span>
                                        </div>
                                        <div className="blog-title">
                                            <h3 >Hey Seeker, It’s Time</h3>
                                        </div>
                                        <div className="blog-description">
                                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
                                        </div>
                                    </div>
                                    <div className="blog-footer">
                                        <div className="blog-comment">
                                            <div className="commentator">
                                                <div className="comment-image">
                                                    <img src="..\images\blog_small_img.jpg" alt="" />
                                                </div>
                                                <span>John Doe</span>
                                            </div>
                                            <div className="comment-icon">
                                                <i className="fas fa-comments"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="blog-image">
                                        <img src="..\images\car_img2.jpg" alt="blog" />
                                    </div>
                                    <div className="blog-body">
                                        <div className="blog-date">
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>02 Feb, 2021</span>
                                        </div>
                                        <div className="blog-title">
                                            <h3 >Hey Seeker, It’s Time</h3>
                                        </div>
                                        <div className="blog-description">
                                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
                                        </div>
                                    </div>
                                    <div className="blog-footer">
                                        <div className="blog-comment">
                                            <div className="commentator">
                                                <div className="comment-image">
                                                    <img src="..\images\blog_small_img.jpg" alt="" />
                                                </div>
                                                <span>John Doe</span>
                                            </div>
                                            <div className="comment-icon">
                                                <i className="fas fa-comments"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog">
                                    <div className="blog-image">
                                        <img src="..\images\car_img3.jpg" alt="blog" />
                                    </div>
                                    <div className="blog-body">
                                        <div className="blog-date">
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>03 Feb, 2021</span>
                                        </div>
                                        <div className="blog-title">
                                            <h3 >Hey Seeker, It’s Time</h3>
                                        </div>
                                        <div className="blog-description">
                                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
                                        </div>
                                    </div>
                                    <div className="blog-footer">
                                        <div className="blog-comment">
                                            <div className="commentator">
                                                <div className="comment-image">
                                                    <img src="..\images\blog_small_img.jpg" alt="" />
                                                </div>
                                                <span>John Doe</span>
                                            </div>
                                            <div className="comment-icon">
                                                <i className="fas fa-comments"></i>
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
