import { useState } from "react";
function CopyTest02() {
    const [arr, setArr] = useState([1, 2])
    const onBtn = () => {
        // arr.push("안녕") //보이는 방식(react)에서는 보이지않게 되고, console에서만 데이터가 추가된 모습만 확인할 수 있다
        console.log("arr : ", arr)
        setArr(arr.concat("안녕"));// react에서도 추가가 되고, console에서도 추가가 된 모습을 확인 할 수 있다
    }
    const [obj, setObj] = useState(
        { name: "김개똥", addr: "개똥별" }
    )
    const onChangeName = () => {
        setObj({ name: "홍길동", addr: obj.addr })
    }
    const onChangeAddr = () => {
        setObj({ ...obj, addr: "별이" })
    }
    return (<>

        name : {obj.name}<br></br>addr : {obj.addr}<br></br>
        <button onClick={onChangeName}>이름 변경</button>
        <button onClick={onChangeAddr}>주소변경</button>
        <hr></hr>
        arr : {arr}<br></br>
        <button onClick={onBtn}>클릭</button>
    </>)
}
export default CopyTest02