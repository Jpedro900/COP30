import React, { Component } from 'react'
import logoCOP30 from '../../assets/selo_COP30.png';

export default class header extends Component {
  render() {
    return (
        <header className=' bg-gradient-to-r from-blue-600 to-blue-800 h-16 flex justify-between text-white px-10 content-center mb-[0.5px] shadow-lg font-Header tracking-widest fixed w-full z-50'>
        <h1 className=' text-4xl font-bold self-center'>COP30</h1>
            <nav>
                <ul className=' flex h-full content-center gap-10'>
                    <li className=' listItem '><a href="#sobre" className=' listContent '>O que é uma cop?</a></li>
                    <li className=' listItem '><a href="#noticias" className=' listContent '>Notícias</a></li>
                </ul>
            </nav>
            <img src={logoCOP30} alt="COP30Logo" className=' size-16 self-center' />
        </header>
    )
  }
}
