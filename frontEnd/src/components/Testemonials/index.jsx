import TestemonialsCard from "../TestemonialsCard";
import "./styles.css"

export default function Testemoials() {
    return (
        <section className="testemonials-section padding-default section-dimensions-default">
            <div className="testemonials-header-container">
                <p>O que os clientes falam</p>
                <h2>Depoimentos</h2>
            </div>

            <div className="testemonials-card">
                <TestemonialsCard name={"Jose Silva de Sousa"} date={"06/04/2024"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fuga delectus aperiam molestiae magni optio asperiores esse, commodi totam temporibus dignissimos."}/>
                
                <TestemonialsCard name={"Jose Silva de Sousa"} date={"06/04/2024"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut fuga delectus aperiam molestiae magni optio asperiores esse, commodi totam temporibus dignissimos."}/>
            </div>
        </section>
    );
}