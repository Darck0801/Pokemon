import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Listar from './componentes1/listar'
import Aleatorios from './componentes1/listar/aleatorios'
import Detalle from './componentes1/listar/detalle'
import Favorito from './componentes1/listar/favoritos'
import Original from './componentes1/listar/original'
import Usuario from './componentes1/listar/usuario'
import Menu from './componentes1/listar/menu';

function App() {
 

  return (
    <Router>

    <Menu />
   
    
    <Routes>
        <Route path="/" element={<Listar />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/original" element={<Original />} />
        <Route path="/favorito" element={<Favorito />} />
        <Route path="/:detalle" element={<Detalle />} />
      </Routes>
    
 
  </Router>
  )
}

export default App
