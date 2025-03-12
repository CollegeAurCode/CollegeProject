import React from "react";
import "./about.css";
import supportImg from './24-hours-support.png';
import blogImg from "./blogger.png";
import liveImg from "./teacher.png";


const About = () => {

    return (
        <>
            
            <div class="container-fluid external1 p-0" data-aos="fade-up" style={{ backgroundColor: '#eff5ff' }}>
                <h1 style={{ fontSize: 'clamp(30px, 4vw, 6vw)' }} className="m-5">About Our Website</h1>
                <div className="row g-5 px-3">
                    <div className="col-12 col-sm-4 col-lg-4 mb-5 d-flex justify-content-center">
                        <div id="about_card" className=" p-3" data-aos="fade-up" style={{ width: '20rem', borderRadius: "10px" }}>
                            <img src={liveImg} class="card-img-top mb-3" alt="..." style={{ width: 'clamp(150px, 15vw, 15vw)', margin: '0 auto', display: 'block' }} />
                            <div class="card-body" style={{ borderTop: '2px solid white' }}>
                                <h5 class="card-title my-3">Live Courses (Paid)</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>Elevate your skills with our engaging live courses. Led by industry experts, these interactive sessions provide real-time feedback and personalized learning experiences, ensuring you gain practical knowledge that you can apply immediately.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-4 mb-5 d-flex justify-content-center">
                        <div id="about_card" className=" p-3" data-aos="fade-up" style={{ width: '20rem', borderRadius: "10px" }} >
                            <img src={blogImg} class="card-img-top mb-3" alt="..." style={{ width: 'clamp(150px, 15vw, 15vw)', margin: '0 auto', display: 'block' }} />
                            <div class="card-body" style={{ borderTop: '2px solid white' }}>
                                <h5 class="card-title my-3">High-Quality Blogs</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>Stay informed and inspired with our high-quality blogs. Curated by education professionals, our articles cover a wide range of topics, offering valuable insights, tips, and strategies to enhance your learning journey and keep you updated on the latest trends.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-4 mb-5 d-flex justify-content-center">
                        <div id="about_card" className=" p-3" data-aos="fade-up" style={{ width: '20rem', borderRadius: "10px" }} >
                            <img src={supportImg} class="card-img-top mb-3" alt="..." style={{ width: 'clamp(150px, 15vw, 15vw)', margin: '0 auto', display: 'block' }} />
                            <div class="card-body" style={{ borderTop: '2px solid white' }}>
                                <h5 class="card-title my-3">24/7 Support</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>Never feel stuck again! Our dedicated 24/7 support team is here to assist you anytime you need help. Whether you have questions about courses or need technical assistance, we're just a message away, ensuring you have a seamless learning experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L80,117.3C160,139,320,181,480,192C640,203,800,181,960,160C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                
            </div>
        </>
    );
}

export default About;