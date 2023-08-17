import React, { useState } from "react";
import "./Left.css";
import './Right.css';
import Work from "./Work";

function Left() {
    const [dataA, setData1] = useState("posL1");
    const [dataB, setData2] = useState("posLA");
    const [dataC, setData3] = useState(false);
    

    function moveBtn() {
        if (!dataC) {
            setData1("posL2");
            setData2("posLB");
            setData3(true);
        } 
        else if (dataC) {
            setData1("posL1");
            setData2("posLA");
            setData3(false);
        }
    }
    return(
        <div className = {dataB}> 
            
            <div className = {dataA} onClick={moveBtn}>Skills</div>
            <div className="showWork"><Work></Work></div>

        </div>
    )
}

export default Left;