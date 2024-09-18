import investImage from "../assets/investment-calculator-logo.png";

export default function Header() {
    return <header id="header">
        <img src={investImage} alt="Investment calculator image" />
        <h1>React Investment Calculator</h1>
    </header>
}
