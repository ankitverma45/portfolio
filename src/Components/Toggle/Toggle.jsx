import React, { useEffect, useState } from "react";
import "./Toggle.css"
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillCircleFill } from 'react-icons/bs';


const Toggle=()=>{
    const [isToogle,setIsToogle]=useState("light-theme")
    const [move,setMove]=useState(false)

    const change=()=>{
    if(isToogle==="dark-theme"){
        setIsToogle("light-theme")
        setMove(!move)
        
    }else{
        setIsToogle("dark-theme")
        setMove(!move)
        
    }
    }
    useEffect(()=>{
        document.body.className=isToogle;
    })
    const heading={
        transform:move? "translateX(26px)":"translateX(0px)",
        transition:" transform 0.2s linear"
    }
    
 
    return (
        <>
        <div className="toggle">
            <span className="sun"><BsFillSunFill /></span>
            <span className="moon"><BsFillMoonFill /></span>
            <div className="circle" onClick={change} style={heading}><BsFillCircleFill /></div>
        </div>
        </>
    )
}

export default Toggle