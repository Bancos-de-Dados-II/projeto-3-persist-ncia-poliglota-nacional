
import Mapa from "../../components/Mapa/Mapa"; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function PaginaMapa() {
  return (
    <div>
      <Header/>

     <div className="mapa">
          <Mapa /> 
    </div>
   
      <Footer/>
    </div>
  );
}

export default PaginaMapa;
