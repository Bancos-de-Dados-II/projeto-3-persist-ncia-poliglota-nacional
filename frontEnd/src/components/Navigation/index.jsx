import "./styles.css"
import { Link } from "react-router-dom";


export default function Navigation() {
    return (
        <nav className="navigation-container">
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <a href={"/#about-us-section"}>Sobre nós</a>
                </li>
                <li>
                    <Link to={"/servicos"}>Serviços</Link>
                </li>
                <li>
                    <Link to="/Contato">Contato</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}