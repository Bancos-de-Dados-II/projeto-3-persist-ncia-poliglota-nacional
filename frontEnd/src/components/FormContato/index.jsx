import "../FormContato/styles.css"

import iconeTelefone from "../../../public/img/telefone-contato.png";
import iconeEmail from "../../../public/img/envelope-contato.png";
import iconeLocalizacao from "../../../public/img/localizacao-contato.png";
import Button from "../Button";

export default function Contato() {
  return (
    <div className="container-contato">
 
      <div className="formulario-contato">
        <h1>Envie-nos uma mensagem</h1>
        <form>
          <div className="linha">
            <div className="campo">
              <label>Nome</label>
              <input type="text" placeholder="Ex.: José Maria da Silva" />
            </div>
            <div className="campo">
              <label>E-mail</label>
              <input type="email" placeholder="Ex.: seuemail@email.com" />
            </div>
          </div>

          <div className="campo">
            <label>Assunto</label>
            <input type="text" placeholder="Ex.: Funcionalidades" />
          </div>

          <div className="campo">
            <label>Mensagem</label>
            <textarea placeholder="Digite sua mensagem aqui"></textarea>
          </div>

        <div className="botao">
          <Button content="Enviar"/>
    </div>
  
        </form>
      </div>

      <div className="container-info">

        <div className="title">
        <h2>Informações de Contato</h2>
</div>

        <div className="container-informacao">
        <div className="informacao">
          <img src={iconeLocalizacao} alt="Ícone de localização" className="icone"/>
          <p>Rua XXXXX-XXXX,Bairro XXX, Número 0000 </p>
       
        </div>

        <div className="informacao">
          <img src={iconeTelefone} alt="Ícone de telefone" className="icone"/>
          <p>(83) 9999-9999</p>
        </div>


        <div className="informacao">
          <img src={iconeEmail} alt="Ícone de email" className="icone" />
          <p>recircular@recircular.com</p>
        </div>
        </div>

      </div>
    </div>
  );
}
