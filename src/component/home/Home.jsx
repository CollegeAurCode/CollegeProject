import React from "react";
import "./Home.css";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import About from "../about/About";
import video from './homevideo.mp4';
import Homecourse from "../homecourse/Homecourse";
import Data from "../homecourse/Data.js";


const Home = () => {
    return (
        <>
            {/* <div className="container-fluid py-5" style={{ marginTop: "70px" }}>
                <div className="container">
                    <div className="row">
                        <div className="left-div col-md-7 ">
                            <video src={video} autoPlay loop muted playsInline type="video/mp4" style={{ height: "400px", objectFit: "cover" }}></video>
                        </div>
                        <div className="right-div col-md-5">Hello</div>
                    </div>
                </div>
            </div> */}

            <Header />
            <div className="container-fluid external p-0">
                <div class="container-fluid hero-heading">
                    <h1 className="heading text-black ">Hero Section</h1>
                </div>
                {/* <div class="container-fluid p-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill='#eff5ff' fill-opacity="1" d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,245.3C840,267,960,277,1080,256C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div> */}

                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill='#eff5ff' fill-opacity="1" d="M0,224L48,208C96,192,192,160,288,149.3C384,139,480,149,576,176C672,203,768,245,864,240C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>

            <About />
            {Data.map(function ncard(val) {
                return (
                    <Homecourse
                        key={val.key}
                        title={val.title}
                        video={val.video}
                        content={val.content}
                    />
                );
            })}
            <Footer />
        </>
    );
}

export default Home;