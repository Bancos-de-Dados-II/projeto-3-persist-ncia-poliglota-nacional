import React, { useState } from 'react';
import "../BuscaGeocodificada/styles.css";
// import { FaSearch } from 'react-icons/fa';
import axios from 'axios';


export default function BuscaGeocodificada({ }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState(null);

  const buscarLocalizacao = async () => {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: searchQuery, // Busca pelo nome informado no input
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
      <input
        className="container-input-busca"
        type="text"
        placeholder='Encontre um ponto ReCircular perto de você'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <div className="container-botao-busca">
      <button className='botao-busca' onClick={buscarLocalizacao}>
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
