export default function StepCounter({ title, value, increamentValue, decreamentValue }) {
    function incrementHandler() {
        increamentValue();
    }

    function decrementHandler() {
        decreamentValue();
    }

    return (
        <div id="step" style={{ display: "flex" }}>
            <button className="active" onClick={incrementHandler} >+</button>
            <h1 style={{ width: "170px", textAlign: "center" }}>
                {title} : {value}
            </h1>
            <button className="active" onClick={decrementHandler}  >-</button>
        </div>
    );
}

    console.log("I am clicked");
