import { createContext, useState } from "react";

const init = { isLoggedIn : false, user : null }
export const AuthContext = createContext()
export const AuthProvider = ( {children} ) => {
    const [auth, setAuth] =useState( init )//auth에 있는값은 true,false값 밖에 없음

    const loginState = () => { //app에서 호출할 예정 > session Storage에 있는 값이 
        const state = JSON.parse( sessionStorage.getItem("auth") )
        setAuth( state )
    }

    const successLogin = ( user ) => {
        setAuth( { isLoggedIn : true, user } )
        sessionStorage.setItem("auth",
            JSON.stringify({ isLoggedIn : true, user }) )
    }
  
    //{ isLoggedIn : true, user }은 자바스크립트의 객체방식이라고 생각하면 됨, 객체 자체를 저장할 수 없으므로 문자열 형식으로 저장
    const logout = () => {
        setAuth( init )
        sessionStorage.clear()
    }
      //sessionStorage에 값이 있기때문에 logout을 하더라도 변경되지않고 로그아웃도 되지않음, 위와같이 logout을 clear를 해야 로그아웃이 로그인으로 변경이 되고 로그아웃이 풀림
    const data = { loginState, auth, logout, successLogin }
    return (<>
    <AuthContext.Provider value={ data }>
        {children}
    </AuthContext.Provider> 
    </>)
}