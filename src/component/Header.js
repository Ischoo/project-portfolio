import React from "react";
import img from './image/profile.jpg';
import "./Header.css";

function Header() {
    return (
        <div>
            <img src={img} alt="Profile"/>
        </div>
            
        
    )
}

export default Header;