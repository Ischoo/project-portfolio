import React from "react";
import Left from "./Left";
import Right from "./Right";
import "./Main.css";



function Main() {
    return(
        // components that holds left and right component
        <div className="mainContainer">
            <Left />
            <Right />
        </div>
    ) 
        
    
}



export default Main;