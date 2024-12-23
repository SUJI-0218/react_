const UseRefCom = ({inputRef, input, inputId, inputPwd, onChange, onSubmit} ) => {
    return (<>
    <form onSubmit ={onSubmit}>
        <input ref={inputId} type="text" name="id" value={input.id} onChange={onChange} /><br></br>
        <input ref={inputPwd} type="text" name="pwd" value={input.pwd} onChange={onChange} /><br></br>
        <input ref={ e=> inputRef.current[0] = e } type="text" name="id2"  onChange={onChange} /><br></br>
        <input ref={ e=> inputRef.current[1] = e } type="text" name="pwd2"  onChange={onChange} /><br></br>
        <button>로그인</button>
    </form>
    </>)
}
export default UseRefCom