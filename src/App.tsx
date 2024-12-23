import { Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/principal/Inicio";
import Principal from "./pages/Principal";
import Productos from "./pages/Productos/Productos";
import Nosotros from "./pages/Nosotros/Nosotros";
import Producto from "./pages/productos/Producto";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Principal />}>
          <Route path="" element={<Inicio />} />
          <Route path="productos" element={<Productos />} />
          <Route path="Nosotros" element={<Nosotros />} />
          <Route path="producto" element={<Producto />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
