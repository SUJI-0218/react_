import { useContext, useReducer, useState } from "react"
import LoginCom from "../components/LoginCom"
import { initalState, reducer } from "../moduls/member_red"
import { loginCheck } from "../service/member_ser"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router-dom"

const LoginCon = () => {
    // const [inputId, setInputId] = useState
    const [state, dispatch] = useReducer(reducer, initalState)
    const {successLogin} = useContext( AuthContext )

    console.log("login con state : ", state)

    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch( {type:"LOADING"} )
        try{
            const result = loginCheck(state.login.id, state.login.pwd )
            dispatch( {type:"FINISHED"} )
            if( result === 0 ){
                alert("인증 성공")
                successLogin( state.login.id )
                navigate("/list")
            }else{
                alert("인증 실패")
            }
        }catch{
            dispatch( {type:"ERROR", msg : e.toString() } )
        }
    }
    const onChange = (e) => { //e는 event
        console.log("e.target : ", e.target)
        const { value, name } = e.target //key와 value를 같이 쓰면 하나만 쓰면 되는데 달리쓰면 name처럼 써주면 됨
        dispatch({type:"CHANGE_INPUT", value, name, form : "login"})
    }
    return (<><LoginCom 
        username={state.login.id}
        password={state.login.pwd}
        onChange={onChange} 
        onSubmit={onSubmit}
        error={state.error}
        flag={state.flag}
        /></>)
}
export default LoginCon