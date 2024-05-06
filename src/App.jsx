import React from 'react';
import logoCOP30 from './assets/selo_COP30.png';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>COP30</h1>
        <nav>
          <ul>
            <li><a href="#sobre">O que e a COP30?</a></li>
            <li><a href="#agenda">Agenda</a></li>
            <li><a href="#participantes">Participantes</a></li>
            <li><a href="#noticias">Notícias</a></li>
          </ul>
        </nav>
        <img src={logoCOP30} alt="COP30Logo" id='logo-cop30' />
      </header>

      <section id="sobre">
          <div className="container-title">
            <h2>COP30</h2>
          </div>
          <div className="container-sub-title">
            <p>O maior evento climatico do mundo</p>
          </div>
      </section>
      <section id="agenda">
        <div className="container">
          <h2>Agenda</h2>
          <p>Confira a agenda oficial da COP30 e os principais eventos que ocorrerão durante a conferência.</p>
        </div>
      </section>
      <section id="participantes">
        <div className="container">
          <h2>Participantes</h2>
          <p>Saiba mais sobre os participantes da COP30, incluindo países, organizações não governamentais, cientistas, e outros envolvidos no processo de negociação e tomada de decisões.</p>
          {/* Lista de participantes */}
        </div>
      </section>
      <section id="noticias">
        <div className="container">
          <h2>Notícias e Atualizações</h2>
          <p>Fique por dentro das últimas notícias e atualizações relacionadas à COP30 e às questões climáticas globais.</p>
          {/* Feed de notícias */}
        </div>
      </section>
      
      <footer>
          <div className="patrocinadores">
            <p>Conheça os patrocinadores e apoiadores da COP30 que tornaram possível a realização deste evento.</p>
            
          </div>
      </footer>
    </div>
  );
}


