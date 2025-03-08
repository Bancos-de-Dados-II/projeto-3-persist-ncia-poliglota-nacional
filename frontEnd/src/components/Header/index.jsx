import Navigation from "../Navigation";
import "./styles.css"

export default function Header() {
    return (
        <header className="header-container padding-default">
            <img src="/img/logo.png" alt="Recircular logo" />

            <Navigation />
        </header>
    );
}