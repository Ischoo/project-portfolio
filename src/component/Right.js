import React, { useState } from "react";
import "./Left.css";
import "./Right.css";
import About from "./About";

//Use states that keeps control of the btn and moves UI if needed
function Right() {
    const [data1, setData1] = useState("posR1_Btn");
    const [data2, setData2] = useState("posR1_Area");
    const [data3, setData3] = useState(false);

    function moveBtn() {
        if (!data3) {
            setData1("posR2_Btn");
            setData2("posR2_Area");
            setData3(true);


        }
        else if (data3) {
            setData1("posR1_Btn");
            setData2("posR1_Area");
            setData3(false);

        }


    }
    return (
        // Right side of screen. Also includes about component, hidden initially

        <div className={data2}>

            <div className={data1} onClick={moveBtn} >About</div>
            <div className="showAbout"><About></About></div>

        </div>
    )

}




export default Right;