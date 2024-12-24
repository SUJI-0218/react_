import { useContext } from "react"
import { TestContext } from "../containers/TestContext"

const LoginCom = ({ flag, error, onSubmit, onChange, password, username }) => {
    const { data } = useContext(TestContext)
    return (<>
        {data.number}<br></br>
        {
            flag ? <h3>loading...</h3>
                : 
                <form onSubmit={onSubmit}>
                    <input type="text" name="id" value={username} onChange={onChange} /><br></br>
                    <input type="text" name="pwd" value={password} onChange={onChange} /><br></br>
                    <button>로그인</button>
                </form>
        }
    </>)
}
export default LoginCom