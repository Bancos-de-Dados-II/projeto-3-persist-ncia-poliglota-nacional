import ButtonBack from "../../components/ButtonBack";
import FormLogin from "../../components/FormLogin";
import "./styles.css"


export function Login(){
    return(
        <section className="login-page-section">
            <div className="lateral-page-section">
                <div className="button-back-login">
                <ButtonBack />
                </div>  
                <img className="img-logo-login" src="/img/recircular-branca.png" ></img>
            </div>
            <FormLogin/>
        </section>
    )
}