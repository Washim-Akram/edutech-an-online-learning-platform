import React, { useEffect, useState } from 'react';
import './Courses.css';

const Courses = () => {

    const [allCourses, setAllCourses] = useState([]);

    useEffect( () =>{
        fetch('./coursesPageCourses.JSON')
        .then(res => res.json())
        .then(data => setAllCourses(data?.coursesInfo))
    },[])
    return (
        <div>
            <section className = "courses-section-bg">
                <div className = "container courses-section-container">
                    <h1 className = "text-center fw-bold text-success courses-section-title">Find the Right Course For You.</h1>

                <div className="">
                    <div className="row">
                        {allCourses?.map((course) => (
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

export default Courses;