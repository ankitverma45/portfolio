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
                                <div>•	This project consists of two panels (Admin & Users )</div>
                                <div><span>•	Admin :</span> Admin can add Movies for users </div>
                                <div><span>•	Users :</span> Users will get the benefits of all services.</div>
                            </div>
                            <div className="project-tech">
                                <div><span>Technology used  :</span> HTML & CSS, JavaScript.</div>
                                <div><span>Link  :</span><a href="https://ankitverma45.github.io/moviepage/ ">https://ankitverma45.github.io/moviepage/ </a></div>
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
                                <div>•	This project consists of two panels (Admin & Users )</div>
                                <div><span>•	Admin :</span> Admin can add Projects and Skill </div>
                                <div><span>•	Reccurter :</span> recruter will get the information about the student.</div>
                            </div>
                            <div className="project-tech">
                                <div><span>Technology used  :</span> JavaScript React.js.</div>
                                <div><span>Link  :</span> <a href="https://ankitverma45.github.io/moviepage/ ">https://ankitverma45.github.io/moviepage/ </a></div>
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