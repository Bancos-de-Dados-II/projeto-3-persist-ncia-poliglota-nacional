import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./styles.css";
import "../../assets/padraoBotaoInput.css"

export default function AtualizarLocalizacao() {
  const [nome, setNome] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [localizacoes, setLocalizacoes] = useState([]);
  const [mensagem, setMensagem] = useState('');
  const [modalAberta, setModalAberta] = useState(false); // Controla a exibição da modal
  const [localizacaoSelecionada, setLocalizacaoSelecionada] = useState(null); // Armazena a localização selecionada

  // Carrega as localizações
  useEffect(() => {
    async function carregarLocalizacoes() {
      try {
        const response = await axios.get('http://localhost:1010/map');
        setLocalizacoes(response.data);
      } catch (error) {
        console.error('Erro ao carregar localizações:', error);
        setMensagem('Erro ao carregar as localizações.');
      }
    }

    carregarLocalizacoes();
  }, []);

  const handleAtualizar = async (e) => {
    e.preventDefault();

    const latNum = parseFloat(latitude);
    const lonNum = parseFloat(longitude);

    if (isNaN(latNum) || isNaN(lonNum)) {
      setMensagem('Latitude e Longitude devem ser números válidos');
      return;
    }

    try {
      if (localizacaoSelecionada) {
        const response = await axios.put(`http://localhost:1010/map/${localizacaoSelecionada._id}`, {
          localizacao: {
            nome: nome,
            coordinates: [lonNum, latNum] 
          }
        });

        if (response.status === 200) {
            alert("Localização atualizada com sucesso")
          setMensagem('Localização atualizada com sucesso!');
          setModalAberta(false); // Fecha a modal após a atualização
        } else {
          setMensagem('Erro ao atualizar a localização.');
        }
      }
    } catch (error) {
      console.error('Erro ao atualizar localização:', error);
      setMensagem('Erro ao atualizar a localização.');
    }
  };

  const handleSelecionarLocalizacao = (localizacao) => {
    setLocalizacaoSelecionada(localizacao);
    setNome(localizacao.localizacao.nome);
    setLatitude(localizacao.localizacao.coordinates[1]);  
    setLongitude(localizacao.localizacao.coordinates[0]); 
    setModalAberta(false);  // Fecha a modal ao selecionar uma localização
  };

  return (
    <div>
 <div className="container">

      {!localizacaoSelecionada && (
        
        <button className='botao-padrao' onClick={() => setModalAberta(true)}>Atualizar um ReCircular</button>
      )}</div>

      {modalAberta && (
        <div className="modal">
          <div className="modal-conteudo">
            <h2>Qual localizacao deseja editar?</h2>
            <ul>
              {localizacoes.map((loc) => (
                <li key={loc._id} onClick={() => handleSelecionarLocalizacao(loc)}>
                  {loc.localizacao.nome}
                </li>
              ))}
            </ul>
            <button className="botao-padrao"onClick={() => setModalAberta(false)}>Fechar</button>
          </div>
        </div>
      )}

      
      {localizacaoSelecionada && (
        <div className="container-form">
        <form onSubmit={handleAtualizar}>
          <h3>Atualizar Localização</h3>
          <input className='input-padrao'
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome da Localização"
            required
          />
          <input className='input-padrao'
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="Latitude"
            required
          />
          <input className='input-padrao'
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="Longitude"
            required
          />
         <button className="botao-padrao "classNametype="submit">Atualizar</button>
        
         
          
        </form>
        </div>
        
      )}

      
    </div>
  );
}
