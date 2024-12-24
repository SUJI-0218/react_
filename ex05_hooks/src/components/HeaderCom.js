import { Link } from "react-router-dom"
const HeaderCom = ({ isLoggedIn, user, onLogout }) => {
    return (<>
        <Link to="/list">목록</Link> &nbsp;
        {
            isLoggedIn ?
                <>
                    <Link to="/logout" onClick={onLogout}>로그아웃</Link> &nbsp;
                    {/* link to로 인해서 경로이동이 됨 */}
                    {user}님 로그인 상태<br></br>
                </>
                :
                <>
                    <Link to="/login">로그인</Link> &nbsp;
                    <Link to="/register">회원가입</Link> &nbsp;
                </>
        }
        <Link to="/context">context</Link> &nbsp;
        <hr></hr>
    </>)
}
// 로그인은 전역변수를 사용해서 될 수 있게 한다.
export default HeaderCom
