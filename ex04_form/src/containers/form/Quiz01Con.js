import { useState } from "react"
import Quiz01Com from "../../components/form/Quiz01Com"
const Quiz01Con = () => {
    const [isChecked, setIsChecked] = useState(false)
    const onRadio = () => {
        setIsChecked(!isChecked)
    }
    const init = [
        { key: 1, value: "10대", name: "age", isChecked: false },
        { key: 2, value: "20대",name: "age", isChecked: false },
        { key: 3, value: "30대", name: "age", isChecked: false },
    ]
    const [age, setAge] = useState(init)
    const onChangeAge = (key) => {
        
        const updateAge = age.map(data => (
            data.key === key ? { ...data, isChecked: !data.isChecked } : data
        ))
        console.log("변경 전 : ", age)
        console.log("변경 후 : ", updateAge)
        setAge(updateAge)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("취미 선택 : ", age)
    }
    return (<>
        <hr></hr>
        <Quiz01Com onSubmit={onSubmit} onRadio={onRadio} onChangeAge={onChangeAge} age={age} />
        </>)
}
export default Quiz01Con