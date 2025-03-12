import ButtonBack from "../../components/ButtonBack";
import FormRegister from "../../components/FormRegister";
import "./styles.css"

export function Register(){
    return(
        <section className="register-page-section">
            <div className="lateral-page-section">
                <div className="button-back-register">
                    <ButtonBack className="back-button"/>
                </div>
       
                <img className="img-logo-register" src="/img/recircular-branca.png"></img>
            </div>
            <FormRegister/>

        </section>
    )
}