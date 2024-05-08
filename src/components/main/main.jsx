import React, { Component } from 'react'
import Sobre from '../sobre/sobre';
import Agenda from '../agenda/agenda';
import Participantes from '../participantes/participantes';
import Noticias from '../noticias/noticias';

export default class main extends Component {
  render() {
    return (
        <main>
            <Sobre />
            <Agenda />
            <Participantes />
            <Noticias />
        </main>
    )
  }
}
