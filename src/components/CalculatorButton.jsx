
function CalculatorButton(props) {

    return (
        <button
            className="calc-button"
            onClick={() => props.onClick(props.value)}
        >
            {props.value}
        </button>
    );

}

export default CalculatorButton;
