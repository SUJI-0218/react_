const Quiz01Com = ({onRadio, isChecked}) => {
    return (
        <>
            <input type="radio" onRadio={onRadio} checked={isChecked} />
        </>
    );
};

export const CheckBoxComponent = ({age, onSubmit, onChangeAge }) => {
    return (<>
            <form onSubmit={onSubmit}>
                {age.map(data => (
                    <span key={data.key}>
                        <label>{data.label}</label>
                        <input
                            type="radio"
                            checked={data.Checked}
                            onChange={() => onChangeAge(data.key)}
                        />
                    </span>
                ))}
                <button>클릭</button>
            </form>
        </>
    );
};

export default Quiz01Com