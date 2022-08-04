import React from "react";
import "./Contact.css"

const Contact=()=>{

    return (
        <>
            <div className="container contact" id="contact">
                <div className="contact-me">
                    <div className="touch">Get in touch</div>
                    <div className="contact-mee">Contact me</div>
                </div>
                <div className="input-text">
                <form className="input-text">
                   <input type="text" placeholder="Name" className="nam"></input>
                   <input type="text" placeholder="Email" className="ema"></input>
                   <textarea type="text" placeholder="Message" className="mess"></textarea>
                   <button>Send</button>
                   </form>
                </div>
            </div>
        </>
    )
}
export default Contact