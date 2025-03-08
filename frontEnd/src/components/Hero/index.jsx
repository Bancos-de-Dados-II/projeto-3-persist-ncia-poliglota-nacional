import Button from "../Button";
import "./styles.css"

export default function Hero() {
    return (
        <section className="hero-container section-dimensions-default padding-default">
           <div className="text-hero-content">
                <h1 className="titulo-hero">ReCircular</h1>

                <p>Olá, somos a ReCircular.
                Nosso trabalho é promover a economia sustentável, através da mediação de troca e doação de objetos.</p>
           </div>

           <Button content={"SAIBA MAIS"} />
        </section>
    );
}
