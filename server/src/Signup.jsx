import React from "react";
import './Signup.css';
import { Link } from 'react-router-dom';
import Header from "./component/header/Header";

function Signup() {
    return (
        <>
            {/* <div className="container-fluid external_container pb-3">
                <div className="container-fluid external-container1 d-flex align-items-center mt-3">
                    
                </div>
            </div> */}

            <Header />
            <div className="container-fluid form-container2 pb-5 pt-3 px-4 col-md-8">
                <div className="container-fluid p-0 d-flex justify-content-end">
                    <div className="btn btn-close "></div>
                </div>
                <h1 className="pb-4 text-center formHeading2">Sign Up</h1>
                <form>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label for="username" className="form-label labelHeading2">Username: </label>
                                <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="enter your name" style={{ borderRadius: '0' }} />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="email-address" className="form-label labelHeading2">Email address: </label>
                                <input type="email" className="form-control" id="email-address" aria-describedby="emailHelp" placeholder="enter email address" style={{ borderRadius: '0' }} />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="user-password" className="form-label labelHeading2">Password: </label>
                                <input type="password" className="form-control" id="user-password" placeholder="enter password" style={{ borderRadius: '0' }} />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label for="user-confirm-password" className="form-label labelHeading2">Confirm Password: </label>
                                <input type="password" className="form-control" id="user-confirm-password" placeholder="enter confirm password" style={{ borderRadius: '0' }} />
                            </div>

                        </div>
                        <button type="submit" className="btn signup_btn mt-4 mb-3 col-12">Sign Up</button>
                        <p className="signupPara">Already have an account? &nbsp; <span><Link to='/login' style={{ color: 'black', fontWeight: '600' }}>Login</Link></span></p>
                    </div>


                </form>
            </div>
        </>
    )
}

export default Signup;