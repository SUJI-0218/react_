import Quiz03StoreCom from "../components/Quiz03StoreCom";
import { useState } from "react";
const Quiz03StoreCon = () => {
    const [store, setStore] = useState({msg : "", inData : 0 , outData : 0})
    const onIn = () => {
        setStore({...store,msg:"어서오세요", inData : store.inData + 1})
    }
    const onOut = () => {
        if( store.inData - store.outData === 0 )
            alert("나갈 손님이 없습니다!!!")
        else
            setStore({...store,msg:"안녕히가세요", outData : store.outData + 1})
    }
    return (<div><Quiz03StoreCom store={store}
                onIn={onIn} onOut={onOut} /></div> );
};
export default Quiz03StoreCon;
