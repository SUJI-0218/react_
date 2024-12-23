const Quiz03StoreCom = ({store,onIn,onOut}) => {
    return (<div>
        {store.msg === ""?("오픈 전 입니다")
        :<div>
            in number : {store.inData}<br></br>
            out number : {store.outData}<br></br>
            in - out = {store.inData - store.outData}
        </div>
        }
        <hr></hr>
        <button onClick={onIn}>IN</button>
        <button onClick={onOut}>OUT</button>
    </div> );
};
export default Quiz03StoreCom;
