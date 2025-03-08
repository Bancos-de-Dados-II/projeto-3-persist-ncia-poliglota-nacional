import Features from "../../components/Features";
import Footer from "../../components/Footer";
import GenericSection from "../../components/GenericSection";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ServicesSection from "../../components/ServicesSection";
import Testemoials from "../../components/Testemonials";
import "./styles.css"

export default function Home() {
    return (
        <section className="home-section">
            <Header />
            <Hero />
            <div id="about-us-section">
                <GenericSection
                    prev={"Sobre nós"}
                    title={"ReCircular"}
                    content={"A ReCircular é uma startup desenvolvida com a missão de tornar o mundo um lugar mais acolhedor para se viver, e visa auxiliar pessoas que querem se desfazer de itens em bom estado a encontrarem pessoas para realizar a troca ou doação, fazendo assim com que os produtos ganhem sobre-vida de mercado"}
                    pathImg={"img/logo-icon.png"}
                    linkButton={"/"}
                />
            </div>
            <ServicesSection />
            <Testemoials />
            <Features />

            <GenericSection
                prev={"Entre em contato"}
                title={"Fale Conosco"}
                content={"Acesse este canal para entrar em contato conosco. Você pode tirar dúvidas, realizar críticas ou sugestões."}
                pathImg={"img/talk-section.png"}
                linkButton={"/contato"}     
                />
            
            <Footer />
        </section>
    );
}