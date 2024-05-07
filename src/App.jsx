import React from 'react';
import Header from './components/header/header';
import Sobre from './components/sobre/sobre';
import Agenda from './components/agenda/agenda';
import Participantes from './components/participantes/participantes';
import Noticias from './components/noticias/noticias';
import Footer from './components/footer/footer';
import Formulario from './components/formulario/formulario';


export default function App() {
  return (
    <div className="App">
      <Header />
      <Sobre />
      <Agenda />
      <Participantes />
      <Noticias />
      <Formulario />
      <Footer />
    </div>
  );
}


