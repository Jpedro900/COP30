import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Formulario from './components/formulario/formulario';
import Main from './components/main/main'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Formulario />
      <Footer />
    </div>
  );
}


