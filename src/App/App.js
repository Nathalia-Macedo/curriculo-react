import './App.css';
import Home from '../Pages/Home/Home';
import { CurriculoProvider } from '../Context/Dados';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CurriculoProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </CurriculoProvider>
  );
}

export default App;