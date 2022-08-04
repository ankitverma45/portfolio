import React from "react";
import "./Navbar.css"
import Toggle from "../Toggle/Toggle";


const Navbar = () => {

    

    return (
        <>
            <div className="navbar container">
                <div className="logo">
                    <div className="name">Ankit</div>
                    <span><Toggle /></span>
                </div>
                <div className="list">
                    <ul className="l-list">
                        <a href="#home"><li>Home</li></a>
                        <a href="#skill"><li>Skill</li></a>
                        <a href="#project"><li>Project</li></a>
                    </ul>
                    <a href="#contact"><button className="button">Contact</button></a>
                </div>
                
            </div>
        </>
    )
}
export default Navbar