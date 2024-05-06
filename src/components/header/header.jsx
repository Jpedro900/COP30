import React, { Component } from 'react'
import logoCOP30 from '../../assets/selo_COP30.png';
import './header.css';

export default class header extends Component {
  render() {
    return (
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
    )
  }
}
