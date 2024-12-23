const Quiz02InOutCom = ({onIn, onOut, msg}) => {
    return(<>
    {msg === ""?<b>값이 존재하지 않음!!!</b>:msg}<br></br>
    <button onClick={onIn}>onIn</button>
    <button onClick={onOut}>onOut</button>
    </>)
}
export default Quiz02InOutCom