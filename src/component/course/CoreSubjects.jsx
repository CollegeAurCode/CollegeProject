import React from "react";
import thumbnail from "./thumbnail.png";
import coreData from "./coreSubs";
import "./coreSubjects.css";

const CoreSubjects = () => {
    return (
        <>
            <div className="container-fluid py-2 subjectHeading">
                <h1 className="text-center fw-bold">Core Subjects</h1>
            </div>
            <div className="container-fluid p-0">
                <div className="container allCards d-flex flex-wrap justify-content-around">
                    {coreData.map(function myCard(val) {
                        return (
                            <div className="card subCard my-4 border-0" >
                                <img src={val.cardImage} className="card-img-top" alt="..." />
                                <div className="card-body bg-white">
                                    <h5 className="card-title ">{val.cardTitle}</h5>
                                    <p className="card-text ">{val.cardDescription}</p>

                                </div>
                                <div className="card-footer border-0 bg-white">
                                    <a href="#" className="btn text-black rounded rounded-pill w-100" style={{backgroundColor:'#cfc3fb'}}>Explore</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default CoreSubjects;