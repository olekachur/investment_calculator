export default function UserInput() {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="input1">Initial investments</label>
                <input
                    type="number"
                    id="input1"
                    required
                />
            </p>
            <p>
                <label htmlFor="expected_retrun">Expected retrun</label>
                <input
                    type="number"
                    id="input2"
                    required
                />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="anual_investment">Annual investment</label>
                <input
                    type="number"
                    id="input3"
                    required
                />
            </p>
            <p>
                <label htmlFor="duration">Duration</label>
                <input
                    type="number"
                    id="input4"
                    required
                />
            </p>
        </div>
    </section>
}
