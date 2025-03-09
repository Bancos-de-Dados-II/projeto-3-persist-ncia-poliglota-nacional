import { useState } from "react";
import axiosApi from "../../services/axios";
import "../../assets/padraoBotaoinput.css"
import "../FormCadastraLocalização/styles.css"

export default function CadastraLocalizacao({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosApi.get("https://nominatim.openstreetmap.org/search", {
        params: {
          q: nome,
          format: "json",
          addressdetails: 1,
          limit: 1,
        },
      });

      const dataApiNomaitim = await response.data;

      console.log("Resposta da API:", dataApiNomaitim); 

      if (dataApiNomaitim.length > 0) {
        const localizacao = dataApiNomaitim[0];
      
        const novaLocalizacao = {
          nome,
          coordinates: [localizacao.lon, localizacao.lat],
        };
        window.alert("Localização cadastrada")
        console.log("Coordenadas recebidas:", novaLocalizacao.coordinates);


        if (novaLocalizacao.coordinates[0] && novaLocalizacao.coordinates[1]) {
          onSubmit(novaLocalizacao); // Envia os dados de volta para o componente 
          setErro(""); 
        } else {
          setErro("Coordenadas inválidas.");
        }
      } else {
        setErro("Localização não encontrada");
      }
    } catch (error) {
      console.error("Erro ao buscar coordenadas: ", error);
      setErro("Erro ao buscar coordenadas. Tente novamente.");
    }
  };

  return (
    <div className="form-cadastro-localizacao">
  
      <form onSubmit={handleSubmit}>
        <input
        className="input-padrao"
          type="text"
          placeholder="Cadastre um ponto ReCircular"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <button className="botao-padrao" type="submit">Cadastrar</button>
      </form>
      {erro && <p className="erro">{erro}</p>}
    </div>
  );
}
