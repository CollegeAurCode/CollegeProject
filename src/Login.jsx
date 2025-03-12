import React from "react";
import './Login.css';
import { Link } from 'react-router-dom';
import Header from "./component/header/Header";

function Login() {
    return (
        <>
            {/* <div className="container-fluid external_container ">
                <div className="container-fluid external-container1 d-flex align-items-center mt-3">
                    
                </div>
            </div> */}
            <Header />
            <div className="container-fluid form-container1 pb-5 pt-3 px-4 col-md-8">
                <div className="container-fluid p-0 d-flex justify-content-end">
                    <div className="btn btn-close "></div>
                </div>
                <h1 className="pb-4 text-center formHeading1">Login</h1>
                <form>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="mb-3">
                                <label for="email-address" className="form-label labelHeading1">Email address: </label>
                                <input type="email" className="form-control" id="email-address" aria-describedby="emailHelp" placeholder="enter email address" style={{ borderRadius: '0' }} />
                            </div>
                            <div className="mb-3">
                                <label for="user-password" className="form-label labelHeading1">Password: </label>
                                <input type="password" className="form-control" id="user-password" placeholder="enter password" style={{ borderRadius: '0' }} />
                            </div>
                        </div>
                        <button type="submit" className="btn login_btn mt-4 mb-3">Login</button>
                        <div className="container-fluid p-0 d-flex justify-content-between">
                            <p className="loginPara1">Don't have an account? &nbsp; <span><Link to='/signup' style={{ color: 'black', fontWeight: '600' }}>Sign Up</Link></span></p>
                            <p className="text-end"><span><Link to='/signup' style={{ color: 'black', fontWeight: '600' }}>Forgot your password?</Link></span></p>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}

export default Login;