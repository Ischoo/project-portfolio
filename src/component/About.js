import React from "react";
import "./About.css"

function About() {
    return(
        // here should be some info about myself as well as links to email and other websites
        <div className="aboutContainer">
            <div className="info">
                <h2 id="hello">Hello there</h2>
                <p>Name is Isak. 31 year old Swede living in Malmö and trying to learn programming. Goes okay I guess.
                    While I am interested in programming I have other interest as well. Football, Music, Computer games is high on the list. 
                    Better if you combine them in some way. 
                    Anyway, while I don't have much experience yet in programming, I am a keen and fast learner. So if that sounds interesting, here are some ways to contact me.
                </p>
            </div>
            <div className="links">
                <ul>
                    <li><a href="mailto:isakallanson@gmail.com"target="_blank">Email</a></li>
                    <li><a href="https://linkedin.com/in/isak-allansson-689276145"target="_blank">Linkedin</a></li>
                    <li><a href="https://github.com/Ischoo" target="_blank">Github</a></li>
                </ul>
            </div>
        </div>
    )
}

export default About;