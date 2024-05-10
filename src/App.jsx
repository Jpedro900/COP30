import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main'
import Noticias from './components/noticias/noticias';
import Noticiasmob from './components/noticiasmob/noticiasmob';
import useWindowSize from './useWindowSize';

export default function App() {

  const width = useWindowSize();

  return (
    <div className=' overflow-hidden'>
      <Header />
      <Main />
      {width < 900 ? <Noticiasmob /> : <Noticias />}
      <Footer />
    </div>
  );
}


