const Quiz01Compont = ( {onPlus, onSub, num} ) => {
    return (<>
    num : {num}<br></br>
    <button onClick={onPlus}>onPlus</button>
    <button onClick={onSub}>onSub</button>
    </>)
}
export default Quiz01Compont;
