import { useState } from "react"

const SquareCalculator = () => {
    const [number, setNumber] = useState("");
    const [squaredNumbers, setSquaredNumbers] = useState([]);

    const handleInputChange = (e) => {
        const input = e.target.value;
        setNumber(input);

        console.log("number : " + number);
        
        const numArray = input.split(",").map((num)=> 
            num.trim()).filter((num)=> 
                !isNaN(num) && num !== "").map(num=> 
                    Math.pow(parseFloat(num),2));

            setSquaredNumbers(numArray);
        } 
            return (
                <>
                    <h1>숫자 제곱 계산기</h1>
                    <input type="text"
                            value={number} 
                            onChange={handleInputChange}/>
                    <h1>제곱값 : </h1>
                    <ul>                       
                        {squaredNumbers.map((square,index) => (
                            <li key={index}>
                                제곱값 : {square}
                            </li>
                        ))}
                    </ul>
                </>
            )
}

export default SquareCalculator;