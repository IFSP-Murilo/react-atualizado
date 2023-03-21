import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CidadeIncluir from './pages/cidade/Incluir';
import CidadeLista from './pages/cidade/Lista';
import Dashboard from './pages/Dashboard';
import ProfessorAlterar from './pages/professor/Alterar';
import ExcluirProfessor from './pages/professor/Excluir';
import ProfessorIncluir from './pages/professor/Incluir';
import ProfessorLista from './pages/professor/Lista';
import Rotas from './rotas/Rotas';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route element={<Rotas />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/professor/lista" element={<ProfessorLista />} />
              <Route path="/professor/incluir" element={<ProfessorIncluir />} />
              <Route path="/professor/alterar/:id" element={<ProfessorAlterar />} />
              <Route path="/professor/excluir/:id" element={<ExcluirProfessor />} />
              <Route path="/cidade/lista" element={<CidadeLista />} />
              <Route path="/cidade/incluir" element={<CidadeIncluir />} />
            </Route>
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
