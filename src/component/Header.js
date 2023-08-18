import React from "react";
import img from './image/profile.jpg';
import './Header.css';

function Header() {
    return (
        //the header is just a picture of me, great..
        <div>
            
            <img src={img} alt="Profile"/>
        </div>
            
        
    )
}

export default Header;