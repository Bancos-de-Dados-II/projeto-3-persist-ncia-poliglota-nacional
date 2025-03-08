import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import Contato from "../pages/Contato"
import PaginaMapa from "../pages/Mapa";

//rotas para paginação entre telas
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/servicos" element={<PaginaMapa />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Register/>} />
      </Routes>
    </Router>
  );
}
