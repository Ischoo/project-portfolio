import React, { useState } from "react";
import "./Left.css";
import './Right.css';
import Work from "./Work";
//Use states that keeps control of the btn and moves UI if needed
function Left() {
    const [dataA, setData1] = useState("posL1_Btn");
    const [dataB, setData2] = useState("posL1_Area");
    const [dataC, setData3] = useState(false);
    

    function moveBtn() {
        if (!dataC) {
            setData1("posL2_Btn");
            setData2("posL2_Area");
            setData3(true);
        } 
        else if (dataC) {
            setData1("posL1_Btn");
            setData2("posL1_Area");
            setData3(false);
        }
    }
    return(
        // Left side of screen. Also includes work component, hidden initially
        <div className = {dataB}> 
            
            <div className = {dataA} onClick={moveBtn}>Skills</div>
            <div className="showWork"><Work></Work></div>

        </div>
    )
}

export default Left;