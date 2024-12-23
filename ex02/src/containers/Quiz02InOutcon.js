import Quiz02InOutCom from "../components/Quiz02InOutCom"
import { useState } from "react"
const Quiz02InOutCon = () => {
    const [msg, setMsg] = useState("")
    const onIn = () => { setMsg("어서오세요") }
    const onOut = () => { setMsg("안녕하세요~") }
    return (<>
        <Quiz02InOutCom onIn={onIn} onOut={onOut} msg={msg} />
    </>)
}
export default Quiz02InOutCon