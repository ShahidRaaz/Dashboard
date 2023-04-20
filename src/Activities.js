import './Activities.css'
import React, { useState } from "react";
import Graph1 from './Graph1';
import Graph2 from './Graph2';
function Activities(){
    const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
    return(
        <div className='flex-container1 actbox' >
            <div id='box'>
            <div className='flex-item activbox'>
            <p id="actt">Activities</p>
            <div className='flex-container1 bar'>
            <div className='flex-item2'>
            <select value={selectedOption} onChange={handleOptionChange}>
                 <option value="option1">May - June 2022
                    </option>
                    <option value="option2">June - July 2022
                    </option>
                </select>
            </div>
            <div className='flex-container1'>
                    <div className="dot" id="pdot"></div>Guest
                    <div className="dot" id="gdot"></div>User
            </div>
            </div>
            <div>
            {selectedOption === "option1" && (
                <div id='graph1' className='graph'>
                    <Graph1/>
                </div>
            )}
            {selectedOption === "option2" && (
                <div id='graph1' className='graph'>
                   <Graph2/>
                </div>
            )}
            </div>
            </div>  
            </div>
        </div>
    )
}
export default Activities;