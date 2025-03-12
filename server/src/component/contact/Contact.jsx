import React from "react";
import email from "./email.png";
import email1 from "./email1.png";
import video from "./contactvideo.mp4";

const Contact = () => {
    return (
        <>
            <div className="container-fluid" style={{ marginTop: '7rem' }}>
                <div className="container" style={{ border: '1px solid black' }}>
                    <div className="row">
                        <div className="left-div col-md-8">
                            <div className="left-heading px-3 py-4 d-flex justify-content-between align-items-center">
                                <h1>Contact us here</h1>
                                <img src={email1} alt="" style={{ width: '25px', height: '30px' }} />
                            </div>
                            <form>
                                <div className="container-fluid upper px-3" >
                                    <div className="row">
                                        <div class="mb-3 col-md-6">
                                            <label for="username" class="form-label">Name</label>
                                            <input type="text" class="form-control" id="username" placeholder="Enter your name" style={{ borderRadius: '0' }} />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label for="user-email" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="user-email" placeholder="Enter your email" style={{ borderRadius: '0' }} />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label for="user-phone" class="form-label">Phone Number</label>
                                            <input type="text" class="form-control" id="user-phone" placeholder="Enter your phone number" style={{ borderRadius: '0' }} />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label for="user-phone" class="form-label">Subject</label>
                                            <input type="text" class="form-control" id="user-phone" placeholder="Enter your subject" style={{ borderRadius: '0' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className=" container-fluid lower px-3">
                                    <div class="mb-3">
                                        <label for="text-area" class="form-label">Message</label>
                                        <textarea class="form-control" id="text-area" rows="3" placeholder="Enter your message" style={{ borderRadius: '0' }}></textarea>
                                    </div>
                                </div>
                                <div className="container-fluid button p-3">
                                    <button className="btn w-100" type="submit" style={{ backgroundColor: '#7043e3', color: 'white', borderRadius: '0' }}>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="right-div col-md-4 py-3 d-flex justify-content-center align-items-center" >
                            {/* <div className="right-heading px-3 py-4">
                                <h1 className="fs-3">Contact Information</h1>
                            </div>
                            <div className="inner-div container-fluid text-center">
                                <img src={email} alt="" className="m-3" style={{width: '30px', height: '35px'}}/>
                                <p>support@collegeaurcode.in</p>
                            </div> */}

                            <video  src={video} autoPlay loop muted playsInline type="video/mp4" style={{ height: "13rem", objectFit: "contain"  }}></video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;