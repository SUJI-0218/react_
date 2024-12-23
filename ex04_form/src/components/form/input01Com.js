const Input01Com = ({ myTest, mySubmit, input }) => {
    return (<>
        <form onSubmit={mySubmit} action="http://www.naver.com">
            <input type="text" value={input.username} name="username" onChange={myTest} /><br></br>
            <input type="text" value={input.password} name="password" onChange={myTest} /><br></br>
            <input type="submit" name="submit"></input>
            <button>전송</button>
        </form>

    </>)
}
export default Input01Com