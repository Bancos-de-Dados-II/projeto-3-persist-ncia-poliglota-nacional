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
                <TestemonialsCard name={"Maria Silva de Sousa"} date={"06/04/2024"} content={"Eu sempre tive itens em casa que não usava mais, mas não sabia o que fazer com eles. Com o Recircular, consegui trocar coisas que não faziam mais sentido para mim por itens que realmente preciso. É uma sensação ótima ver como algo que eu não usava mais encontrou uma nova vida e ajudou alguém. O processo é simples, rápido e muito mais sustentável!"}/>
                
                <TestemonialsCard name={"Joana Silva de Sousa"} date={"09/03/2024"} content={"Eu estava à procura de móveis baratos e sustentáveis para minha casa, e encontrei o que precisava no Recircular. Não só economizei, como também ajudei o meio ambiente, já que os itens estavam sendo reutilizados em vez de descartados. A plataforma é muito fácil de usar e está ajudando a mudar meu estilo de vida."}/>
            </div>
        </section>
    );
}