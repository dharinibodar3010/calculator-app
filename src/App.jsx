
import { useState, useEffect } from "react";
import CalculatorButton from "./components/CalculatorButton";
import "./App.css";

function App() {

    const [input, setInput] = useState("");

    useEffect(() => {
        document.title = "Calculator App";
    }, []);

    function handleClick(value) {

        if (value === "C") {
            setInput("");
        }
        else if (value === "DEL") {
            setInput(input.slice(0, -1));
        }
        else if (value === "=") {

            try {
                if (input === "") {
                    return;
                }

                const result = Function(
                    '"use strict"; return (' + input + ')'
                )();

                if (!Number.isFinite(result)) {
                    setInput("Error");
                }
                else {
                    setInput(String(result));
                }

            }
            catch {
                setInput("Error");
            }

        }
        else {

            if (input === "Error") {
                setInput(value);
            }
            else {
                setInput(input + value);
            }

        }

    }

    const buttons = [
        "C", "DEL", "%", "/",
        "7", "8", "9", "*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ".", "="
    ];

    return (

        <div className="calculator-container">

            <h2>Calculator</h2>

            <input
                type="text"
                value={input}
                readOnly
                className="display"
                placeholder="0"
            />

            <div className="button-grid">

                {buttons.map((item, index) => (

                    <CalculatorButton
                        key={index}
                        value={item}
                        onClick={handleClick}
                    />

                ))}

            </div>

        </div>

    );

}

export default App;
