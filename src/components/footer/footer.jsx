import React, { Component } from 'react'
import Formulario from '../formulario/formulario';

export default class footer extends Component {
  render() {
    return (
        <footer className=' h-[500px] bg-gradient-to-r from-blue-600 to-blue-800 flex justify-around content-start'>
            <div className="">
              <p className=' mt-7 font-Header text-white tracking-wider text-2xl'>Conheça os patrocinadores e apoiadores da COP30 que tornaram este evento possível.</p>
            </div>
            <Formulario />
        </footer>
    )
  }
}
