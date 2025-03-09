import React, { useState } from 'react';
import axios from 'axios';
import "./styles.css"
import "../../assets/padraoBotaoInput.css"

const DeletarLocalizacao = () => {
  const [nome, setNome] = useState('');
  const [message] = useState('');

  const handleDeletar = async () => {
    try {
    
      const response = await axios.delete(`http://localhost:1010/map/${nome}`);
      const resposta = await response.data;
      console.log("Resposta da API:", resposta); 
     
          if (response.status === 200) {
        alert("Ponto ReCircular deletado com sucesso!");
      } else {
        alert('Localização não encontrada');
      }
    } catch (error) {
      console.error('Erro ao deletar a localização:', error);
      alert('Erro ao tentar deletar ponto ReCircular');
    }
  };

  return (
    <div className='form-deleta-localizacao'>
      <input className='input-padrao'
        type="text"
        placeholder="Deseja deletar um ponto ReCircular?"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button className ="botao-padrao"onClick={handleDeletar}>Deletar</button>
      <p>{message}</p>
    </div>
  );
};

export default DeletarLocalizacao;
