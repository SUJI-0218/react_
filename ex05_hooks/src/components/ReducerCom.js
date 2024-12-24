import { useReducer, useState } from "react";
const myReducer = (state, action) => {
    //myReducer는 state의 값을 변경하기 위해서 사용을 함
    console.log("reducer 실행 state : ", state )
    console.log("reducer 실행 action : ", action )
    //if( action.type ==="up")
    switch( action.type ){
        //state = { value : 0 }
        case "up" : return {value : state.value + 1}
        case "down" : return {value : state.value - 1}
        default : return state
    }

    //return state //{value:10, name:"홍길동"} 마지막에 state값 무조건 return 넣어야 함
}
const initialState = { value: 0 } //초기값을 key,value 형식으로 만들어줌
const ReducerCom = () => {
    const [state, dispatch] = useReducer(myReducer, initialState)
    // const [num, setNum] =useState(0)
    // setNum(1)
    console.log("reducer com 동작 : ", state)
    // dispatch()
    const up = () => {
        dispatch({type : "up"})//action의 값은 key,value 형식으로 중괄호 안에 넣어줌, 보편적으로는 key라고 쓰지 않고 type으로 많이 씀
    }
    const down = () => {
        dispatch({type : "down"})
    }
    return (<>
    <div>{state.value}</div>
        <button onClick={up}>up</button>
        <button onClick={down}>down</button>
    </>)

}
export default ReducerCom

//useState랑 다를거는 없지만 useState는 파일을 만들어서 사용이 안되어서 myReducer는 파일을 만들어서 사용이 가능함, 기능을 봤을때는 useState랑 똑같음
