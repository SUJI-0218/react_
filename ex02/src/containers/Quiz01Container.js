import Quiz01Compont from "../components/Quiz01Component";
import { useState } from "react";
const Quiz01Container = () => {
    const [ num, SetNum ] = useState( 0 );
    const onPlus = () => {
        SetNum( num + 1 )
    }
    const onSub = () => {
        SetNum( num - 1 )
    }
    return (<>
    "container"
    <Quiz01Compont onPlus={onPlus} onSub={onSub} num={num} />
    </>)
}
export default Quiz01Container;
