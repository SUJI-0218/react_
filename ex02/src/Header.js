function Header( props) {
    console.log("props : ", props )
    return (<>
    <h1>HEADER 영역</h1>
    props.test : {props.test}<br></br>
    props.number : {props.number}<br></br>

    </>)
}
export default Header;