import React, { Component } from 'react'
import Formulario from '../formulario/formulario';

export default class footer extends Component {
  render() {
    return (
        <footer className=' h-[550px] bg-gradient-to-r from-blue-600 to-blue-800 flex justify-center'>
            <div className="">
              <p className=' mt-7 font-Header text-white tracking-wider text-2xl text-center hidden'></p>
            </div>
            <Formulario />
        </footer>
    )
  }
}
