import React, { useState } from "react";
import "./Left.css";
import "./Right.css";
import About from "./About";


function Right() {
    const [data1, setData1] = useState("posR1");
    const [data2, setData2] = useState("posRA");
    const [data3, setData3] = useState(false);
  
    function moveBtn() {
        if (!data3) {
            setData1("posR2");
            setData2("posRB");
            setData3(true);
            
            
        

            
        } 
        else if (data3) {
            setData1("posR1");
            setData2("posRA");
            setData3(false);
           
        }
        

    }
    return(
        <div className = {data2}> 
            
            <div className = {data1} onClick={moveBtn} >About</div>
               <div className="showAbout"><About></About></div>
                    
                
            

        </div>
    )
    
}
    



export default Right;