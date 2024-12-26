import "../styles/test.css"
import styled, {css} from "styled-components"
// styled를 사용을하면 재활용이 가능하며 자동으로 태그를 만들어 줌
const CssCom1 = () => {
    const style = { color: "blue", fontSize: "30px" }
    return (<>
        <div style={style}>CssCom</div>
        <div style={{ color: "blue", fontSize: "30px" }}>CssCom</div>
        <div className="test">test css</div>
        {/* {}는 변수를 저장하는 방식 */}
        {/* 노드에서는 div class라고 썼지만 리액트에서는 className으로 써야됨 */}
    </>)
}
const Div01 = styled.div`
color : red; font_size : 30px
`
const colorList = ["red", "blue"]
// const H101 = styled.h1`background : gold; ` 이렇게도 사용이 가능하나 위에 코드처럼 변수로 지정을 해서 아래와같이 불러올 수도있음
const H101 = styled.h1`background : ${colorList[0]}; color : ${colorList[1]}`
const CssCom2 = () => {
    return (<>
    <Div01>연습 중!!!</Div01>
    <H101>h1</H101>
    </>)
}
const Button01 = styled.button`
width : 500px;
background : green;
${props => props.myWidth && css`
    background : gold; width : ${props.myWidth}` }
`
const CssCom = ( props ) => {
    console.log("props : ", props)
    return (<>
    <Button01 {...props}/>
    </>)
}
export default CssCom