export default function UserInput({ handlerInput, inputValue }) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial investments</label>
                <input
                    type="number"
                    required
                    onChange={(e) => handlerInput('initialInvestment', e.target.value)}
                    value={inputValue.initialInvestment}
                />
            </p>
            <p>
                <label>Expected retrun</label>
                <input
                    type="number"
                    required
                    onChange={(e) => handlerInput('expectedReturn', e.target.value)}
                    value={inputValue.expectedReturn}
                />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Annual investment</label>
                <input
                    type="number"
                    required
                    onChange={(e) => handlerInput('annualInvestment', e.target.value)}
                    value={inputValue.annualInvestment}
                />
            </p>
            <p>
                <label>Duration</label>
                <input
                    type="number"
                    required
                    onChange={(e) => handlerInput('duration', e.target.value)}
                    value={inputValue.duration}
                />
            </p>
        </div>
    </section>
}
