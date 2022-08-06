import React from "react";
import "./Project.css"
import Img from "../../Img/movie.png"
import Imgs from "../../Img/portfolio.png"


const Project = () => {

    return (
        <>
            <div className="container">
                <div className="skill-heading project-heading" id="project">Projects</div>
                <div className="project-info">
                    <div className="project-intro">
                        <div className="movie-img">
                            <img src={Img} alt="ankit"></img>
                        </div>
                        <div className="project-text">
                            <div className="project-heading">Movie Website</div>
                            <div className="project-dec">Project Description : </div>
                            <div className="project-content">
                                <div>Implemented Movie Watch application which is a clone for Movie where users can log in and can see a list of
                                    movies like Trending, Live Tv Show, Saved videos,Ratings,Category
                                    and also can search movies and view specific video details.
                                </div>
                            </div>

                            <div className="project-tech">
                                <div><span>Technology used  :</span> HTML , CSS(Responsive Website) & JavaScript(API Calls).</div>
                                <div><span>Link  :</span><a href="https://ankitverma45.github.io/moviepage/" target="_blank">https://ankitverma45.github.io/moviepage/ </a></div>
                                <div><span>Project type   :</span> Web Application </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-info">
                    <div className="project-intro">
                        <div className="movie-img">
                            <img src={Imgs} alt="ankit"></img>
                        </div>
                        <div className="project-text">
                            <div className="project-heading">Portfolio Website</div>
                            <div className="project-dec">Project Description : </div>
                            <div className="project-content">
                                <div>•	This project consists of two panels (Students & Recruiters )</div>
                                <div><span>•	Students :</span> Student can add Projects and Skills </div>
                                <div><span>•	Recruiters :</span> Recruiter will get the information about the student.</div>
                            </div>
                            <div className="project-tech">
                                <div><span>Technology used  :</span> React JS , HTML , CSS(Responsive Website) , JavaScript.</div>
                                <div><span>Link  :</span> <a href="https://ankitverma45.github.io/portfolio/" target="_blank">https://ankitverma45.github.io/portfolio/</a></div>
                                <div><span>Project type   :</span> Web Application </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project