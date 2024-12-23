import { useState } from "react"
import CheckBox02Com, { CheckBoxComponent } from "../../components/form/CheckBox02Com"
//디폴트인 값은 놔두고, {}를 쳐서 그 외의 값을 보내줌
const CheckBox02Con = () => {
    const [isChecked, setIsChecked] = useState(false)
    const onCheckBox = () => {
        setIsChecked(!isChecked)
    }
    const init = [
        { key: 1, label: "구창모", isChecked: false },
        { key: 2, label: "박민우", isChecked: false },
        { key: 3, label: "손아섭", isChecked: false },
    ]
    const [hobby, setHobby] = useState(init)
    const onChangeHobby = (key) => {
        console.log("key : ", key)
        const updateHobby = hobby.map(data => (
            data.key === key ? { ...data, isChecked: !data.isChecked } : data
        ))
        console.log("변경 전 : ", hobby)
        console.log("변경 후 : ", updateHobby)
        setHobby(updateHobby)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("취미 선택 : ", hobby)
    }
    return (<>
        <hr></hr>
        <CheckBoxComponent onSubmit={onSubmit} onChangeHobby={onChangeHobby} hobby={hobby} />
        <hr></hr>
        <CheckBox02Com onCheckBox={onCheckBox} isChecked={isChecked} /></>)
}
export default CheckBox02Con