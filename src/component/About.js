import React from "react";
import "./About.css"

function About() {
    return(
        <div className="aboutContainer">
            <div className="info">
                <h2 id="hello">Hello there</h2>
                <p>Name is Isak. 31 year old Swede living in Malmö and trying to learn programming. Goes okay I guess.
                    While I am interested in programming I have other interest as well. Football, music, computer games is high on the list. 
                    Better if you combine them in some way. 
                    Anyway, while I don't have much experience yet in programming, I am a keen and fast learner. So if it sounds interesting, here are some ways to contact me.
                </p>
            </div>
            <div className="links">
                <ul>
                    <li><a href="google.com">Email</a></li>
                    <li><a href="linkedin.com">Linkedin</a></li>
                    <li><a href="github.com">Github</a></li>
                </ul>
            </div>
        </div>
    )
}

export default About;