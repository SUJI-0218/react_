function CopyTest() {
    let arr01 = [1, 2, 3]
    // const arr02 = [arr01[0],arr01[1],arr01[2]] 3,4번은 같은 코드임, 4번이 단순해서 좀 더 많이 쓸 수 있을거같음
    const arr02 = [...arr01]
    arr02[3] = 1234;
    const obj01 = { id: "aaa", name: "홍길동" }
    // const obj02 = obj01 7,8번은 같은 복사 방식(8번은 깊은 복사)
    const obj02 = {...obj01, id:"다른 값"} //,를 쓰면서도 깊은 복사를 많이 이용함
    obj02['name'] = "김개똥"

    arr01.push(1000) //push는 얕은 복사로 이루어짐, 자기자신에서 추가
    arr01 = arr01.concat(2000) //concat은 깊은 복사로 이루어짐, 새롭게 배열이 만들어짐, 그래서 추가 된다고 생각을 하면됨
    //!!!!!!!!let, const, var의 차이를 알아보자!!!!!!!!

    return (<>
        obj01<br></br>
        id : {obj01.id}<br></br>
        name : {obj01.name}<br></br>
        obj02<br></br>
        id : {obj02.id}<br></br>
        name : {obj02.name}<br></br>

        arr01
        <ul>
            {arr01.map(n => <li>{n}</li>)}
        </ul>
        <hr></hr>
        arr02
        <ul>
            {arr02.map(n => <li>{n}</li>)}
        </ul>
    </>)
}
export default CopyTest
//사용을 할때는 깊은 복사를 사용을 함
// 데이터 자체를 복사해서 넘겨주는거를 깊은 복사라고 함