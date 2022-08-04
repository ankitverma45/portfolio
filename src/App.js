import React from "react";
import Navbar from "./Components/Navbhar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skill from "./Components/Skill/Skill";
import Project from "./Components/Project/Project"
import Contact from "./Components/Contact/Contact"

const App=()=>{
    return (
      <>
        <Navbar />
        <Intro />
        <Skill />
        <Project />
        <Contact />
      </>
    )
}

export default App