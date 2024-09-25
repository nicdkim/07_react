import { useState } from "react";

const hardCalculator = (num) => {

    for(let i = 0; i<99569999; i++) {
        return num + 99569999;
    }
}

const HardCalculator = () => {
    const [hardNumber, setHardNumber] = useState(0);
    const hardSum = hardCalculator(hardNumber);
    
    return ( 
        <>
            <h3>어려운 계산기</h3>
            <input type="number"
                   value={hardNumber}
                   onChange={e => setHardNumber(parseInt(e.target.value))} />
            <span>+99569999 = {hardSum}</span>
        </>
    )
}

export default HardCalculator;