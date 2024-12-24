import { useContext } from "react"
import HeaderCom from "../components/HeaderCom"
import { AuthContext, logout } from "./AuthContext"

const HeaderCon = () => {
    const { auth, logout } = useContext( AuthContext )
    console.log("header auth : ", auth )
    const { isLoggedIn, user } =auth
    const onLogout = (e) => {
        e.preventDefault(); //경로이동하는거를 막아준다.
        logout()
    }
    return (<><HeaderCom onLogout={onLogout} isLoggedIn={isLoggedIn} user={user} /></>)
}
export default HeaderCon