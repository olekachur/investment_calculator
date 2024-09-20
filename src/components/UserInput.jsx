import { useState } from "react";

export default function UserInput() {
    const [input, setInput] = useState({
        initialInvestment: '',
        annualInvestment: '',
        expectedReturn: '',
        duration: '',
    });

    function handleInputChange(inputIdentiffier, newValue) {
        setInput(prevInput => {
            return {
                ...prevInput,
                [inputIdentiffier]: newValue,
            }
        })
        console.log(input);
        console.log(inputIdentiffier, newValue);
    }

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial investments</label>
                <input
                    type="number"
                    required
                    onChange={(e) => handleInputChange('initialInvestment', e.target.value)}
                    value={input.initialInvestment}
                />
            </p>
            <p>
                <label>Expected retrun</label>
                <input
                    type="number"
                    required
                    onChange={(e) => handleInputChange('expectedReturn', e.target.value)}
                    value={input.expectedReturn}
                />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Annual investment</label>
                <input
                    type="number"
                    required
                    onChange={(e) => handleInputChange('annualInvestment', e.target.value)}
                    value={input.annualInvestment}
                />
            </p>
            <p>
                <label>Duration</label>
                <input
                    type="number"
                    required
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                    value={input.duration}
                />
            </p>
        </div>
    </section>
}
