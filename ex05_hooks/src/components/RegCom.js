const RegCom = ({flag, error, onSubmit, onChange, username, password, name, addr}) => {
    return (<>
    { flag ? <h3>Register Loading... </h3> 
    : error ? <h3>{error}</h3>
    : 
    <form onSubmit={onSubmit}>
    <input type="text" name="id" value={username} onChange={onChange} /><br />
    <input type="text" name="pwd" value={password} onChange={onChange} /><br />
    <input type="text" name="name" value={name} onChange={onChange} /><br />
    <input type="text" name="addr" value={addr} onChange={onChange} /><br />
    <button>회원가입</button>
    </form>
}

</>)}
export default RegCom