
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rotas from './rotas/Rotas';
import Dashboard from './pages/Dashboard';
import ProfessorLista from './pages/professor/Lista';
import ProfessorIncluir from './pages/professor/Incluir';
import ProfessorAlterar from './pages/professor/Alterar';
import CidadeLista from './pages/cidade/Lista';
import CidadeIncluir from './pages/cidade/Incluir';


function App() {
  return (
     <>
     <BrowserRouter>
      <Routes> 
        <>  
        <Route element={<Rotas/>}>
          <Route path="/" element={<Dashboard/>} /> 
          <Route path="/home" element={<Dashboard/>} /> 
          <Route path="/professor/lista" element={<ProfessorLista/>}/>
          <Route path="/professor/incluir" element={<ProfessorIncluir/>}/>
          <Route path="/professor/alterar/:id" element={<ProfessorAlterar/>}/>
          <Route path="/cidade/lista" element={<CidadeLista/>}/>
          <Route path="/cidade/incluir" element={<CidadeIncluir/>}/>
        </Route>        
        </>
      </Routes>  
     </BrowserRouter>
     </>
     
  );
}

export default App;
