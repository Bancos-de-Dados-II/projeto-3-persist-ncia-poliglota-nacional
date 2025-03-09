import React, { useState } from 'react';
import "../BuscaGeocodificada/styles.css";
import "../../assets/padraoBotaoInput.css"
import axios from 'axios';

export default function BuscaGeocodificada() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState(null);

  const buscarLocalizacao = async () => {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: searchQuery,
          format: 'json',
          addressdetails: 1,
          limit: 1,
        },
      });

      const location = response.data[0];
      setResult(location);
    } catch (error) {
      console.error('Erro ao buscar localização:', error);
      alert('Erro ao buscar localização.');
    }
  };

  return (
    <div className='container-busca'>
    
      <div className="container-input-botao">
        <input
          className="input-padrao"
          type="text"
          placeholder='Busque um ReCircular próximo '
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='botao-padrao' onClick={buscarLocalizacao}>
          Buscar
        </button>
      </div>

  
      {result && (
        <div className="resultado-busca">
          <h3>Resultado da Busca:</h3>
          <p><strong>Nome:</strong> {result.display_name}</p>
          <p><strong>Latitude:</strong> {result.lat}</p>
          <p><strong>Longitude:</strong> {result.lon}</p>
        </div>
      )}
    </div>
  );
}
