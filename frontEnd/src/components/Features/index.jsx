import FeatureItem from "../FeatureItem";
import "./styles.css"

export default function Features() {
    return (
        <section className="features-container padding-default section-dimensions-default">
            <h2>Funcionalidades</h2>

            <div className="features-itens">
                <FeatureItem iconPath={"/img/personIcon.png"} title={"Cadastro"} description={"Os usuários podem se cadastrar na plataforma e interagir entre si."} />

                <FeatureItem iconPath={"/img/pointMap.png"} title={"Geolocalização"} description={"O serviço de geolocalização oferece praticidade na hora de buscar novas ofertas de troca na região."} />

                <FeatureItem iconPath={"/img/list.png"} title={"Catálogo"} description={"É possível explorar o catálogo de locais dísponíveis no mapa."} />

                <FeatureItem iconPath={"/img/trash.png"} title={"Excluir"} description={"A qualquer momento é possível excluir localidades que não estão mais disponíveis."} />
            </div>
        </section>
    );
}