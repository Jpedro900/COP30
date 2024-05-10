import React, { Component } from 'react'
import Destaquenoticias from '../destaquesnoticias/destaquenoticias'

export default class noticiasmob extends Component {
  render() {
    return (
        <section id='noticias'>
            <div className=' text-center bg-gray-200 p-6 mb-6'>
                <h2 className=' text-5xl font-Header tracking-wider uppercase mb-2'>Notícias</h2>
                <p className=' font-Poppins text-2xl'>Fique por dentro das últimas notícias relacionadas à COP30 e às questões climáticas globais.</p>
            </div>
            <Destaquenoticias/>
        </section>
    )
  }
}