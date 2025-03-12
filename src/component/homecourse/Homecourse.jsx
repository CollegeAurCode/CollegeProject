import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

function Homecourse(props) {
    useEffect(() => {
        AOS.init({
            duration: 500, 
            easing: 'ease-in-out', 
            delay: 200, 
            once: true,
        });
    }, []);

    return (
        <>

            <div className="container-fluid pt-5 courseContainer">
                <div className="container-fluid d-flex justify-content-center">

                    <div className="card p-3" data-aos="fade-up" style={{maxWidth:'62rem', border: "none", boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.2)", borderRadius: "0"}}>

                        <div className="row">
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <video src={props.video} autoPlay loop muted playsInline type="video/mp4" style={{height: "17rem", width: "100%", objectFit: "contain" }}></video>
                            </div>

                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">{props.title}</h2>
                                    <p className="card-text mt-3">{props.content}</p>
                                    <button className="btn mt-4 py-2 px-4" style={{backgroundColor: "#7043e3", color: "white", borderRadius: "0"}}>Explore</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}


export default Homecourse;