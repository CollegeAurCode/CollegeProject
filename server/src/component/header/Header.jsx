import React from "react";
import { Link, NavLink } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid main-container">
                        <Link to='/' className="navbar-brand fs-3">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end px-lg-3">

                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Courses
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to='coreSubjects'>Core Subjects</NavLink></li>
                                        <li><NavLink className="dropdown-item" to='competitiveSubjects'>Competitive Exam(GATE)</NavLink></li>
                                        <li><NavLink className="dropdown-item" to='codingSubjects'>Coding</NavLink></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : 'text-secondary'}`} to='/' aria-current="page" href="#">Home</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : 'text-secondary'}`} to='about' aria-current="page" href="#">About</NavLink>
                                </li>


                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : 'text-secondary'}`} to='contact' aria-current="page" href="#">Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : 'text-secondary'}`} to='blog' href="#">Blog</NavLink>
                                </li>

                            </ul>
                            <Link to='login'><button className="btn login-btn">Login/Signup</button></Link>
                        </div>


                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;