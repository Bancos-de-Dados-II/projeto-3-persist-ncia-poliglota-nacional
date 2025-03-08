import "./styles.css"
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function Button({content, href}) {
    return (
        <Link to={href} className="link-button">
            <button className={`button-container`}>
                <p>{content}</p>
                <img src="/img/arrow.png" alt="ir" />
            </button>
        </Link>
    );
}