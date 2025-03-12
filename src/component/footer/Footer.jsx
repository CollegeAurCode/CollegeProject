import React from "react";
import './footer.css'
import {NavLink} from 'react-router-dom';
import email1 from "../contact/email1.png";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container-fluid mt-5">

                    <div className="container" >


                        <div className="row">
                            <div className="first-div col-md-4" >
                                {/* <a></a>
                            <p></p> */}



                            </div>
                            <div className="second-div col-md" >
                                <p className="fw-bold ">Quick Links</p>
                                <div className="links">
                                    <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'text-primary' : 'color-before'}`} to='/'>Home</NavLink>
                                    <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'text-primary' : 'color-before'}`} to='/about'>About</NavLink>
                                    <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'text-primary' : 'color-before'}`} to='/Blog'>Blog</NavLink>
                                    <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'text-primary' : 'color-before'}`} to='/contact'>Contact</NavLink>
                                </div>

                            </div>
                            <div className="third-div col-md">
                                <p className="fw-bold">Legal</p>
                                <div className=".links">
                                    <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'text-primary' : 'color-before'}`} to='/about'>Privacy Policy</NavLink>
                                    <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'text-primary' : 'color-before'}`} to='/about'>Terms of use</NavLink>
                                    <NavLink className={({ isActive }) => `nav-link  ${isActive ? 'text-primary' : 'color-before'}`} to='/about'>Refund and Cancel Policy</NavLink>
                                </div>

                            </div>
                            <div className=" fourth-div col-md">
                                <p className="container-fluid fw-bold">Get in Touch</p>

                                <div className="container-fluid d-flex align-items-center">
                                    <img src={email1} alt="" style={{ width: '30px', height: '35px', marginRight: '11px' }} />
                                    <p className='mb-0'>support@collegeaurcode.in</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer;