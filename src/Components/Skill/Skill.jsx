import React from "react";
import "./Skill.css"
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3Full } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';


const Skill = () => {

    return (
        <>
            <div className="skill-heading container" id="skill">Skills</div>
            <div className="skill-icon container">
                <AiFillHtml5 className="html"/>
                <DiCss3Full className="css"/>
                <IoLogoJavascript className="java"/>
                <FaReact className="react"/>
            </div>
            <div className="skillitems container">
                <div className="skillitem">
                   <div>HTML :</div>
                   <div className="html-line"></div>
                </div>
                <div className="skillitem">
                   <div>CSS :</div>
                   <div className="css-line"></div>
                </div>
                <div className="skillitem">
                   <div>JAVASCRIPT :</div>
                   <div className="java-line"></div>
                </div>
                <div className="skillitem">
                   <div>REACT :</div>
                   <div className="react-line"></div>
                </div>
                
            </div>
            
        </>
    )
}

export default Skill