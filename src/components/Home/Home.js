import { faCheckCircle, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import aboutImage from "../../images/about_img.png";
import heroIcon from "../../images/hero_icon.png";
import heroImage from "../../images/hero_img.png";
import subject_01 from "../../images/subjects/s_01.png";
import subject_02 from "../../images/subjects/s_02.png";
import subject_03 from "../../images/subjects/s_03.png";
import subject_04 from "../../images/subjects/s_04.png";
import subject_05 from "../../images/subjects/s_05.png";
import subject_06 from "../../images/subjects/s_06.png";
import subject_07 from "../../images/subjects/s_07.png";
import subject_08 from "../../images/subjects/s_08.png";
import './Home.css';






const Home = () => {
    const arrowRightIcon = <FontAwesomeIcon icon={faLongArrowAltRight} />
    const checkCircle = <FontAwesomeIcon icon = {faCheckCircle}/>

    const [courses, setCourses] = useState([]);

    useEffect( () =>{
        fetch('./homePageCourses.JSON')
        .then(res => res.json())
        .then(data => setCourses(data?.coursesInfo))
    },[])
    return (
        <div>
            <header>
                <div className="container header">
                    <div className="row d-flex justify-content-center align-items-center gx-5">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div>
                                <div className="mb-4">
                                    <img src={heroIcon} alt="Hero Icon" />
                                </div>
                                <p className="text-danger fw-bold mb-4"># Learn Anything, Anytime, Anywhere</p>
                                <h1 className="mb-4">Best Online Learning <br /> For your future.</h1>
                                <h5 className="mb-4 text-secondary">We believe everyone has the capacity to be <br/>creative.Turitor is a place where people <br /> develop their own potential.</h5>
                                <div>
                                    <Link to="/courses">
                                    <button type="button" className="btn btn-primary p-2 m-2">
                                    VIEW COURSE <span className = "ms-2">{arrowRightIcon}</span></button>
                                    </Link>
                                    <Link to="/contact">
                                    <button type="button" className="btn btn-danger p-2 m-2">
                                    CONTACT US <span className = "ms-2">{arrowRightIcon}</span></button>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div>
                                <img className="w-100" src={heroImage} alt="Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>





            <section className = "subject-section-bg">
                <div className ="container subject-section-container">
                    <div className = "subject-section-title">
                        <h2>Recent Popular Subjects</h2>
                        <div className="row d-flex justify-content-between align-items-center">
                            
                                <div className = "col-sm-12 col-md-6 col-lg-6">
                                    <p className="text-secondary">Online learning offers a new way to explore <br /> subjects you’re passionate about.</p>
                                </div>
                                <div className = "col-sm-12 col-md-6 col-lg-6">
                                    <div>
                                        <Link to="/courses">
                                            <button type="button" className="btn btn-primary p-2">VIEW ALL <span className = "ms-2">{arrowRightIcon}</span></button>
                                        </Link>
                                    </div>
                                </div>
                        </div>
                    </div>


                    <div>
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                <div className="col">
                                    <div className="card h-100 single-card">
                                    <img className = "w-25 mt-4 ms-4 card-img-top"src={subject_01} alt="computer science"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Computer Science</h5>
                                        <p className="card-text text-secondary">Computer science is the study of algorithmic processes, computational machines and computation itself.As a discipline, computer science spans a range of topics from theoretical studies of algorithms.</p>
                                       
                                    </div>

                                    <div className="card-footer">
                                        <button type="button" className="btn btn-outline-primary">
                                                VIEW COURSES<span className = "ms-2">{arrowRightIcon}</span>
                                        </button> 
                                    </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card h-100 single-card">
                                    <img className = "w-25 mt-4 ms-4 card-img-top"src={subject_02} alt="web development"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Web Development</h5>
                                        <p className="card-text text-secondary">Web development is the work involved in developing a Web site for the Internet or an intranet.Web development can range from developing a simple single static page of plain text to complex web applications.</p>
                                         
                                    </div>

                                    <div className="card-footer">
                                        <button type="button" className="btn btn-outline-primary">
                                                VIEW COURSES<span className = "ms-2">{arrowRightIcon}</span>
                                        </button> 
                                    </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card h-100 single-card">
                                    <img className = "w-25 mt-4 ms-4 card-img-top"src={subject_03} alt="business studies"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Business Studies</h5>
                                        <p className="card-text text-secondary">Business studies is an academic subject taught in schools and at university level in many countries. Its study combines elements of accountancy. </p>
                                        
                                    </div>

                                    <div className="card-footer">
                                        <button type="button" className="btn btn-outline-primary">
                                                VIEW COURSES<span className = "ms-2">{arrowRightIcon}</span>
                                        </button> 
                                    </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card h-100 single-card">
                                    <img className = "w-25 mt-4 ms-4 card-img-top"src={subject_04} alt="data science"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Data Science</h5>
                                        <p className="card-text text-secondary">Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data.</p>
                                       
                                    </div>

                                    <div className="card-footer">
                                        <button type="button" className="btn btn-outline-primary">
                                                VIEW COURSES<span className = "ms-2">{arrowRightIcon}</span>
                                        </button> 
                                    </div>
                    
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card h-100 single-card">
                                    <img className = "w-25 mt-4 ms-4 card-img-top"src={subject_05} alt="engineering"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Engineering</h5>
                                        <p className="card-text text-secondary">Engineering is the use of scientific principles to design and build machines, structures, and other items, including bridges, tunnels, roads, vehicles, and buildings.</p>
                                        
                                    </div>
                                    <div className="card-footer">
                                        <button type="button" className="btn btn-outline-primary">
                                                VIEW COURSES<span className = "ms-2">{arrowRightIcon}</span>
                                        </button> 
                                    </div>
                                   
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card h-100 single-card">
                                    <img className = "w-25 mt-4 ms-4 card-img-top"src={subject_06} alt="user experience"/>
                                    <div className="card-body">
                                        <h5 className="card-title">User Experience</h5>
                                        <p className="card-text text-secondary">The user experience is how a user interacts with and experiences a product, system or service. It includes a person's perceptions of utility, ease of use, and efficiency.</p>
                                        
                                    </div>

                                    <div className="card-footer">
                                        <button type="button" className="btn btn-outline-primary">
                                                VIEW COURSES<span className = "ms-2">{arrowRightIcon}</span>
                                        </button> 
                                    </div>
                                   
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card h-100 single-card">
                                    <img className = "w-25 mt-4 ms-4 card-img-top"src={subject_07} alt="psychology"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Psychology</h5>
                                        <p className="card-text text-secondary">Psychology is the science of mind and behavior. Psychology includes the study of conscious and unconscious phenomena, as well as feelings and thought.</p>
                                        
                                    </div>

                                    <div className="card-footer">
                                        <button type="button" className="btn btn-outline-primary">
                                                VIEW COURSES<span className = "ms-2">{arrowRightIcon}</span>
                                        </button> 
                                    </div>
                                    
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card h-100 single-card">
                                    <img className = "w-25 mt-4 ms-4 card-img-top"src={subject_08} alt="architecture planning"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Architecture Planing</h5>
                                        <p className="card-text text-secondary">In the field of architecture an architectural plan is a design and planning for a building, and can contain architectural drawings.</p>
                                       
                                    </div>

                                    <div className="card-footer">
                                        <button type="button" className="btn btn-outline-primary">
                                                VIEW COURSES<span className = "ms-2">{arrowRightIcon}</span>
                                        </button> 
                                    </div>
                                    
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        
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
        </div>

        <section className = "subject-section-bg">
            <div className ="container subject-section-container">
                <div className = "subject-section-title">
                    <h2>Find the right course for you</h2>
                        <div className="row d-flex justify-content-between align-items-center">
                            
                                <div className = "col-sm-12 col-md-6 col-lg-6">
                                    <p className="text-secondary">Online learning offers a new way to explore <br /> subjects you’re passionate about.</p>
                                </div>
                                <div className = "col-sm-12 col-md-6 col-lg-6">
                                    <div>
                                        <Link to="/courses">
                                            <button type="button" className="btn btn-primary p-2">VIEW ALL <span className = "ms-2">{arrowRightIcon}</span></button>
                                        </Link>
                                    </div>
                                </div>
                        </div>
                </div>

                <div className="">
                    <div className="row">
                        {courses?.map((course) => (
                            <div className="col-md-4">
                            <div className="cart">
                            {/* <div className="cart-details">
                            <img className="w-100" src={course.imgUrl} alt="" />
                            </div> */}
                            <div className="text-area">
                            <h3>{course.courseTitle}</h3>
                            <p>{course.courseDescription}</p>
                            <h4>{course.votes} Votes</h4>
                            <h4>Ratings : {course.ratings}</h4>
                            <h4>{course.price}</h4>
                            <Link to= "/courses">
                            <button type="button" className="btn btn-outline-primary">
                                VIEW COURSES<span className = "ms-2">{arrowRightIcon}</span>
                            </button> 
                            </Link>
                            </div>
                        </div>
                        </div>
                        ))}
                    </div>
                </div>


            </div>

        </section>
        
        </div>
    );
};

export default Home;