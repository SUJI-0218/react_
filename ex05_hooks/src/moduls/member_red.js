import { data } from "react-router-dom"
const initalState = {
    login: { id : "", pwd : "" },
    // reg : { id, pwd, name, addr}
    register : { id : "", pwd : "", name : "", addr :""},
    data : null, 
    flag : false,
    error : null
}
const reducer = (state, action) => {
    switch (action.type) {
        case "LIST" : return {...state, data : action.data }
        case "CHANGE_INPUT":
            console.log("state : ", state)
            console.log("action : ", action)
            const form = state[action.form]
            //form = {id:"", pwd:""} form이라는 태그는 로그인을 불러옴
            form[action.name] = action.value //12번의 값이 17번의 form의 깊은 복사에 들어가고 그 부분이 action.form에 들어가게 됨
            //form = {id:"111", pwd:""} name(id)의 값을 들고 왔기때문에 id를 불러옴
            //form = {id:"111", pwd:"222"} 10~14번 코드 잘이해하면 됨


            return {...state, [action.form] : {...form}};
            case "LOADING" : return {...state, flag : true, error : null }
            case "FINISHED" : return {...state, flag : false, error : null }
            case "ERROR" : return {...state, flag : false, error:action.msg } 
        default: return state;
    }

}
export { initalState, reducer }