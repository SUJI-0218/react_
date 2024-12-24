import { useReducer } from "react"
import RegCom from "../components/RegCom"
import { initalState, reducer } from "../moduls/member_red"
import { useNavigate } from "react-router-dom"
import { register } from "../service/member_ser"
const RegCon = () => {
    const [state, dispatch] = useReducer(reducer, initalState)

    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("state : ", state.register )
        dispatch( {type : "LOADING"} )
        try{
            const result = register( state.register )
            if( result === 1 ){
                navigate("/list")
            }
            dispatch( {type : "LOADING"} )
        }catch(e){
            dispatch( {type : "ERROR", msg : e.toString() } )

        }
        
    }
    const onChange = (e) => {
        const {value, name } = e.target
        dispatch({type:"CHANGE_INPUT", value, name, form: "register"})
    }
    return (<><RegCom 
        onChange={onChange} 
        username={state.register.id}
        password={state.register.pwd} 
        name={state.register.name} 
        addr={state.register.addr}
        onSubmit={onSubmit}
        flag = {state.flag}
        error = {state.error}
         /></>)
}
export default RegCon