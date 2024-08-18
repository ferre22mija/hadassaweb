import { Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/principal/Inicio";
import Principal from "./pages/Principal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Principal />}>
          <Route path="" element={<Inicio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
