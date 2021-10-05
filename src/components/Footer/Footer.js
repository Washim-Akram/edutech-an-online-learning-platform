import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {
    faMapMarkedAlt, faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12">
              <div className="left-container text-start">
                <h1>About Edutech<span className = "text-primary">.</span></h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    *Edutech...An online learning platform is an integrated set of interactive online services that provide trainers, learners, and others involved in education with information, tools and resources to support and enhance education delivery and management. One type of eLearning platform is a learning management system (LMS).
                  </small>
                </p>

                <p className="mt-5">
                  <small>Edutech- A Online Learning Platform. © All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2 col-12">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Courses</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-12">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon me-3">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+880 1234 56789</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon me-3">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>
                      160/1 Azimpur-road, Azimpur, Dhaka<br />
                      Madina Tower, 7th Floor, Azimpur <br />
                        Dhaka-1205, Bangladesh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;