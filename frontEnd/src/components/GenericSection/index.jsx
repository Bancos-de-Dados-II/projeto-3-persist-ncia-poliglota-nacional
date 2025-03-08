import Button from "../Button";
import "./styles.css"

// eslint-disable-next-line react/prop-types
export default function GenericSection({prev, title, content, pathImg, linkButton}) {
    return (
        <section className="generic-container section-dimensions-default padding-default">
            <div className="content-section-div">
                <p>{prev}</p>
                <h2>{title}</h2>
                <p>{content}</p>
                <Button href = {linkButton} content={"ACESSAR"} />
            </div>
            
            <div>
                <img src={pathImg} alt="Imagem" />
            </div>
        </section>
    );
}