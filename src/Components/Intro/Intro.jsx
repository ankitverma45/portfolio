import React from "react";
import "./Intro.css"
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import Img from "../../Img/port.png"
import Resume from "./Ankit_resume .docx"




const Intro = () => {

    return (
        <>
        <div className="intro container" id="home">
           <div className="intro-name">
              <div className="first-line">Hy! I Am</div>
              <div className="second-line">Ankit Verma</div>
              <div className="third-line">Frontend Developer with good level of experience in web development</div>
              <div className="fourth-line">producting the Quality work</div>
              <a href={Resume} download><button className="button button-intro">Download C.V</button></a>
              <div className="icon-intro">
                 <a href="https://github.com/ankitverma45" target="_blank"  className="icon-name"><BsGithub /></a>
                 <a href="https://www.linkedin.com/in/kuldeep-singh-5783a81b6/" target="_blank" className="icon-name"><FaLinkedinIn /></a>
                 <a href="https://www.instagram.com/ankit_verma_45/" target="_blank" className="icon-name"><AiOutlineInstagram /></a>
              </div>
           </div>
           <div className="intro-img">
            <img src={Img} alt="ankit"></img>
           </div> 
        </div>
        </>
    )
}
export default Intro