import { useEffect, useReducer } from "react"
import ListCom from "../components/ListCom"
import { getList } from "../service/member_ser"
import { initalState, reducer } from "../moduls/member_red"
const ListCon = () => {
    // const [list, setList] =useState([])
    const [state, dispatch] = useReducer(reducer, initalState)
    useEffect(() => {
        // setList(getList())

        try {
            dispatch( {type:"LOADING"} )
            setTimeout(() => {
                const data = getList()
                dispatch({ type: "LIST", data })
                dispatch({ type: "FINISHED"})
            }, 2000)
            // throw new Error("failed to fetch data") 강제 에러 발생
        } catch (e) {
            dispatch( {type:"ERROR", msg : e.toString() } )
        }
    }, [])
    return (<><ListCom error={state.error} flag={state.flag} list={state.data} /></>)
}
export default ListCon