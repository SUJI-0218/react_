import { useState } from "react"
import Input01Com from "../../components/form/input01Com"

const Input01Con = () => {
    const [input, setInput] = useState({ username: "", password: "" })
    const test1 = (e) => {
        console.log("event", e)
        console.log("target", e.target)
        console.log("value", e.target.value)
        setInput({...input, [e.target.name] : e.target.value })
        // if (e.target.name === "username")
        //     setInput({ username: e.target.value, password: input.password })
        // else
        //     setInput({ username: input.username, password: e.target.value })
    }
    const mySubmit = (e) => {
        e.preventDefault();//우리가 액션으로 네이버로 이동을 하게끔 만들었는데 이거를 쓰면서 이동방지를 하려고 함, 주석처리로 하면 전송을 누르면 네이버 화면으로 이동을 함
        console.log("이동 방지 : ", e.target)
    }
    return (<><Input01Com input={input} mySubmit={mySubmit} myTest={test1} /></>)
}
export default Input01Con