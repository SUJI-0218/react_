import StateTest from "./StateTest"
import Quiz01Container from "./containers/Quiz01Container"
import Quiz02InOutCon from "./containers/Quiz02InOutcon"
import CopyTest from "./components/CopyTest"
import CopyTest02 from "./components/CopyTest02"
import Quiz03StoreCon from "./containers/Quiz03StoreCon"
// app에서는 불러오는게 다임

function App() {
    console.log(" app ")
    return <>
        <Quiz03StoreCon />
        <hr></hr>
        <CopyTest02 />
        <hr></hr>
        <CopyTest />
        <hr></hr>
        <Quiz02InOutCon />
        <hr></hr>
        <Quiz01Container />
        <hr></hr>
        <StateTest />
    </>
}
export default App;