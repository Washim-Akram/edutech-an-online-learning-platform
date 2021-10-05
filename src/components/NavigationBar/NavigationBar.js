import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div>
            <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/home" className = "navbar-brand">Edutech<span className = "text-primary">.</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link to="/home" className="nav-item">
                        <li>Home</li>
                    </Link>
                    <Link to="/about" className="nav-item">
                        <li>About us</li>
                    </Link>
                    <Link to="/courses" className="nav-item">
                        <li>Courses</li>
                    </Link>
                    <Link to="/contact" className="nav-item">
                        <li>Contact us</li>
                    </Link>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    );
};

export default NavigationBar;