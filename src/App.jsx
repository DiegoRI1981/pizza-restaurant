import React from 'react';
import './App.css';
import Inicio from './../src/Inicio.jsx';
import Menu from './../src/Menu.jsx';
import Contacto from './../src/Contacto.jsx';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Pizza Palace</h1>
        </header>
        <nav className="App-nav">
          <ul>
            <li>
              <NavLink to="/inicio">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menú</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </nav>
        <Routes> {/* Utiliza <Routes> como contenedor de tus rutas */}
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <footer className="App-footer">
          <p>&copy; 2023 Pizza Palace</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
