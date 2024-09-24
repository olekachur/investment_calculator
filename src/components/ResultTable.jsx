import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ investmentResult }) {
    const results = calculateInvestmentResults(investmentResult);
    const initialInvest = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

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
                {results.map((result) => {
                    const totalInvest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvest;
                    const toalAmountInvest = result.valueEndOfYear - totalInvest;
                    return (<tr className="center" key={result.year}>
                        <th>{result.year}</th>
                        <th>{formatter.format(result.valueEndOfYear)}</th>
                        <th>{formatter.format(result.interest)}</th>
                        <th>{formatter.format(totalInvest)}</th>
                        <th>{formatter.format(toalAmountInvest)}</th>
                    </tr>)
                })}
            </tbody>
        </table>
    );
}
