import { useState } from "react"

const UseRefIndex = () => {
    const [num, setNum] = useState(0)
    const number = useState(0)
    console.log("시작")
    const onState = () => {
        console.log("state 변경"); setNum( num +1 )  
    }
    const onRef = () => {
        console.log("ref 변경")
        number.current = number.current + 1; 
    }
    return (<>
        state : {num}, ref : {number.current}<br></br>
        <button onClick={onState}>onState</button>
        <button onClick={onRef}>onRef</button>
    </>)
}
export default UseRefIndex