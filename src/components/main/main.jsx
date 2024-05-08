import React, { Component } from 'react'
import Sobre from '../sobre/sobre';
import Noticias from '../noticias/noticias';

export default class main extends Component {
  render() {
    return (
        <main>
            <Sobre />
            <Noticias />
        </main>
    )
  }
}
