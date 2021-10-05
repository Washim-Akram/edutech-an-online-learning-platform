import { faCheckCircle, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from "../../images/about_img.png";
import heroImage from "../../images/hero_img.png";
import './About.css';



const About = () => {
    const arrowRightIcon = <FontAwesomeIcon icon={faLongArrowAltRight} />
    const checkCircle = <FontAwesomeIcon icon = {faCheckCircle}/>
    return (
        <div>
            <section>
                    <div className="container header">
                        <div className="row d-flex justify-content-center align-items-center gx-5">

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div>
                                    <img className="w-100" src={aboutImage} alt="About" />
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div>
                                    <h1 className="mb-4">Learn something new, and <br /> Grow your skills.</h1>
                                    <p className="text-secondary fw-bold mb-4">Learning something new every day is one of the top ways to <br /> keep the mind sharp. The brain is like a muscle and needs to <br /> be exercised frequently to stay in tip-top shape.Discovering <br/> a new skill, language, craft, or instrument is a great way to <br /> put your mind to work.</p>

                                    <div className="row d-flex align-items-center gy-3 mb-4">
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div>
                                                <span>{checkCircle} Expert Trainer</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div>
                                                <span>{checkCircle} Remote Learning</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div>
                                                <span>{checkCircle} Lifetime Access</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div>
                                                <span>{checkCircle} Self Development</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <Link to="/courses">
                                            <button type="button" className="btn btn-primary p-2 m-2">
                                                VIEW COURSES <span className = "ms-2">{arrowRightIcon}</span>
                                            </button>
                                        </Link>
                                        <Link to="/contact">
                                            <button type="button" className="btn btn-danger p-2 m-2">
                                                CONTACT US <span className = "ms-2">{arrowRightIcon}</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                    <div className="container header">
                        <div className="row d-flex justify-content-center align-items-center gx-5">

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div>
                                    <h1 className="mb-4">We are turitor an online<br /> learning community.</h1>
                                    <p className="text-secondary fw-bold mb-4">At Turitor, we believe everyone should have the opportunity <br /> to create progress through technology and develop the skills <br /> of tomorrow. With assessments, learning paths and courses <br /> authored by industry experts</p>
                                    <p className="text-secondary fw-bold mb-4">we believe everyone should have the opportunity to create <br /> progress through technology and develop the skills of tomorrow</p>

                                    <div className="row d-flex align-items-center gy-3 mb-4">
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div>
                                                <span>{checkCircle} Expert Trainer</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div>
                                                <span>{checkCircle} Remote Learning</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div>
                                                <span>{checkCircle} Lifetime Access</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div>
                                                <span>{checkCircle} Self Development</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <Link to="/courses">
                                            <button type="button" className="btn btn-primary p-2 m-2">
                                                VIEW COURSES <span className = "ms-2">{arrowRightIcon}</span>
                                            </button>
                                        </Link>
                                        <Link to="/contact">
                                            <button type="button" className="btn btn-danger p-2 m-2">
                                                CONTACT US <span className = "ms-2">{arrowRightIcon}</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div>
                                    <img className="w-100" src={heroImage} alt="About" />
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default About;