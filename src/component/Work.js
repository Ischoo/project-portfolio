import React from "react";
import img from './image/munamii.png';
import img2 from './image/soon.png';
import imgSkill from "./image/skill.png" ;
import "./Work.css";

function Work() {
    return(
        // work container, includes links to my projects and an image of my programming skills
    <div className="workContainer">
            <div className="workImage">
                <a href="https://ischoo.github.io/Munamii/" target="_blank"><img src={img} alt="Work 1"></img> </a>
                <img src={img2} alt="Work 2"></img>
                <img src={img2} alt="Work 3"></img>
                <img src={img2} alt="Work 4"></img>
            </div>
            <p className="message">Oh my, there doesn't seem to be that much interesting here. Well hopefully that will change in the future.</p>

            <div className="competense">
            <img src={imgSkill} alt="HTML img"></img>

            </div>
        </div>
        )
}

export default Work;