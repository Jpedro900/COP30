import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main'

export default function App() {
  return (
    <div className=' overflow-x-hidden'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}


