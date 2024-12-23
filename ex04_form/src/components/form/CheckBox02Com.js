const CheckBox02Com = ({ onCheckBox, isChecked }) => {
    return (
        <>
            <label>확인</label>
            <input type="checkbox" onChange={onCheckBox} checked={isChecked} />
        </>
    );
};

export const CheckBoxComponent = ({ onSubmit, onChangeHobby, hobby }) => {
    return (<>
            <form onSubmit={onSubmit}>
                {hobby.map(data => (
                    <span key={data.key}>
                        <label>{data.label}</label>
                        <input
                            type="checkbox"
                            checked={data.Checked}
                            onChange={() => onChangeHobby(data.key)}
                        />
                    </span>
                ))}
                <button>클릭</button>
            </form>
        </>
    );
};

// 기본 컴포넌트 내보내기
export default CheckBox02Com;