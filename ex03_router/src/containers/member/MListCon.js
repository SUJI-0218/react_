import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import {getList} from "../../service/member/member"
import { useNavigate } from "react-router-dom";
const MListCon = () => {
    const navigate = useNavigate()
    // console.log(getList())
    const [list, setList] = useState([])
    // setList(getList())
    const [num, setNum] = useState(0)
    useEffect( () => {
        console.log("useEffect")
        // setNum(num+1)
        const getData = async () => {
            const data = await getList()
            setList("data : ", data)
            console.log(data)
        }
        // getData()
        getList()
        .then(data => setList(data))
        
        // console.log("getList() : ", getList())
        // getList()
        // .then(res=>res.json())
        // .then(data=>setList(data))

        // setList(getList())
    },[]) //의존성. 아무값도 없으면 렌더링 될때만 실행. 값이 있으면 특정 값이 변경 될때마다 effect가 다시 실행됨. 나중에 DB연결하면 의존성 추가하면 됨
    const onClick = (id) => {
        navigate("/member/delete/"+id)
        alert("삭제 완료")
    }
    return (<>
        {console.log("랜더링 종료")}
        <MListCom onClick={onClick} list={list}/>
    </>)
}

export default MListCon