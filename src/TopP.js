import PieChart1 from './Piechart1';
import PieChart2 from './Piechart2';
import React, { useState } from "react";
import './TopP.css'
function TopP(){
    const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
    return(
        <div className='flex-container1' >
        <div id='products' className='prsc'>
        <div className='flex-item prscbox'>
        <div className='flex-container1' >
        <div className='flex-item2'>
            <h2 className='pstitle'>
                Top Products
                </h2>
        </div>
            <div className='flex-container1'>
            <div className='flex-item2 ptext'>
                 <select value={selectedOption} onChange={handleOptionChange}>
                 <option value="option1">May - June 2022
                    </option>
                    <option value="option2">June - July 2022
                    </option>
                </select>
            </div>
            </div>
        </div>
        <div>
            {selectedOption === "option1" && (
                <div>
                    <PieChart1/>
                </div>
            )}
            {selectedOption === "option2" && (
                <div>
                    <PieChart2/>
                </div>
            )}
            </div>
        </div>
        </div>
        </div>
    )
}
export default TopP;