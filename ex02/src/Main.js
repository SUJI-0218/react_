function Main({tel, nick, myclick}){
    return <>
    <h5>main 영역</h5>
    tel : {tel}<br></br>
    nick : {nick}
    <button onClick={myclick}>클릭</button>
    </>
}
export default Main;