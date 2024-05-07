import React, { Component } from 'react'
import logoCOP30 from '../../assets/selo_COP30.png';

export default class header extends Component {
  render() {
    return (
        <header className=' bg-blue-800 h-16 flex justify-between text-white px-10 content-center'>
        <h1 className=' text-4xl font-bold self-center'>COP30</h1>
            <nav>
                <ul className=' flex h-full content-center gap-10'>
                    <li className=' listItem '><a href="#sobre" className=' listContent '>O que e a COP30?</a></li>
                    <li className=' listItem '><a href="#agenda" className=' listContent '>Agenda</a></li>
                    <li className=' listItem '><a href="#participantes" className=' listContent '>Participantes</a></li>
                    <li className=' listItem '><a href="#noticias" className=' listContent '>Notícias</a></li>
                </ul>
            </nav>
            <img src={logoCOP30} alt="COP30Logo" className=' size-16 self-center' />
        </header>
    )
  }
}
