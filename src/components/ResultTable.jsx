import { calculateInvestmentResults, formatter } from "../util/investment";


export default function ResultTable({ investmentResult }) {
    const results = calculateInvestmentResults(investmentResult);

    return (
        <table id="result">
            <thead>
                <tr className="center">
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => (
                    <tr className="center" key={result.year}>
                        <th>{result.year}</th>
                        <th>{formatter.format(result.valueEndOfYear)}</th>
                        <th>{formatter.format(result.interest)}</th>
                        <th>{formatter.format(result.interest * result.year)}</th>
                        <th>{formatter.format(result.annualInvestment * result.year)}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
