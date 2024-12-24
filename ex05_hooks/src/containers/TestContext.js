import { createContext, useState } from "react"

const init = { number : 0 }
const TestContext = createContext()//TestContext이거가 저장소라고 보면됨
const TestProvider = ({ children }) => {
    // console.log( "props : ", props )
    const [data, setData] = useState( init )
    const clickPlus = () => { 
        // alert("click plus") 
        setData( {number : data.number + 1 } )
    }
    const clickSub = () => {
        // alert("click sub") 
        setData( {number : data.number - 1 } )
        }
    const click = { clickPlus, clickSub, data }
    return (<>
        <TestContext.Provider value={click} >
            {children}
        </TestContext.Provider>
    </>)

}

export { TestContext, TestProvider }