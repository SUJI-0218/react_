import logo from './logo.svg';
import './App.css';
import ReducerCom from './components/ReducerCom';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';
import ListPage from './pages/ListPage';
import TestCon from './containers/TestCon';
import { useContext, useEffect } from 'react';
import { AuthContext } from './containers/AuthContext';

function App() {
  // console.log("app")
  const { loginState, auth } = useContext(AuthContext)
  useEffect(() => {
    if (sessionStorage.getItem("auth") && !auth.isLoggedIn) {
      loginState()
    }
  })
  //sessionStorage에 값이 있기때문에 logout을 하더라도 변경되지않고 로그아웃도 되지않음

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegPage />}></Route>
        <Route path='/list' element={<ListPage />}></Route>
        <Route path='/context' element={<TestCon />}></Route>
      </Routes>
    </>
  );
}

export default App;
