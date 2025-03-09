import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axiosApi from "../../services/axios.js";
import logo from "../../../public/img/pinmapa.png";
import "./styles.css";
import LocationMarker from "../LocalizacaoAtual/index.jsx";
import CadastraLocalizacao from "../FormCadastraLocalização/index.jsx";
import BuscaGeocodificada from "../BuscaGeocodificada/index.jsx";
import DeletarLocalizacao from "../FormDeletaLocalizacao/index.jsx";
//import UserServices from "../../services/user/UserServices.js";
//import RedisService from "../../services/redis/RedisService.js";

const customIcon = new L.Icon({
  iconUrl: logo,
  iconSize: [200, 200],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function Mapa() {
  //const userService = new UserServices();
  //const redisService = new RedisService();

  const [locais, setLocais] = useState([]);

  useEffect(() => {

    const runRedis = async () => {
      /*const sectionData = await redisService.getDataSection();

      if (!sectionData) {
        alert("Você não está autorizado a acessar essa página, faça o login e tente novamente");
        userService.redirectPage("login");
      }*/
    }

    axiosApi
      .get("http://localhost:1010/map")
      .then((res) => {
        setLocais(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar locais: ", err);
      });

      runRedis();
  }, []);

  const cadastrarLocalizacao = (novaLocalizacao) => {

    const dados = {
      localizacao: {
        nome: novaLocalizacao.nome,
        type: "Point",
        coordinates: [
          novaLocalizacao.coordinates[0],
          novaLocalizacao.coordinates[1]
        ]
      }
    };

    axiosApi
      .post("http://localhost:1010/map", dados)
      .then((res) => {
        console.log("Localização cadastrada com sucesso!");
        setLocais((prevLocais) => [...prevLocais, res.data]); // Atualiza a lista de locais
      })
      .catch((err) => {
        console.error("Erro ao cadastrar localização: ", err.response || err.message, err);
      });
  };

  return (
    <div className="container-mapa">
      <div className="container-mapa-principal">
      <MapContainer
        className="mapa"
        center={[-6.888601818211769, -38.56707625327777]}
        zoom={13}
        style={{ height: "500px", width: "50%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {locais.map((local) => {
          const latitude = parseFloat(local.localizacao.coordinates[1]);
          const longitude = parseFloat(local.localizacao.coordinates[0]);

          console.log("COORDENADAS NA RENDERIZAÇÃO")
          console.log(latitude)
          console.log(longitude);

          
          if (!isNaN(latitude) && !isNaN(longitude)) {
            console.log("Coordenadas válidas:", latitude, longitude);  
            return (
              <Marker
                key={local._id}
                position={[latitude, longitude]}
                icon={customIcon}
              >
                <Popup>{local.localizacao.nome}</Popup>
              </Marker>
            );
          } else {
            console.error("Coordenadas inválidas:", latitude, longitude);
            return null;
          }
        })}
        <LocationMarker />
      </MapContainer>
      <div className="campo-busca">
    
      <BuscaGeocodificada/>
      <CadastraLocalizacao onSubmit={cadastrarLocalizacao} />
      <DeletarLocalizacao/>
      </div>
    </div>
    </div>
  );
}

export default Mapa;
