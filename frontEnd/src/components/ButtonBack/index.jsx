import "./styles.css"
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function ButtonBack() {
    return (
        <Link to={"/"} className="link-button-back">
            <button className={`button-container-back`}>
                <img src="/img/arrow-back.png" alt="ir" />
            </button>
        </Link>
    );
}