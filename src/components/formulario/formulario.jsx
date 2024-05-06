import React, { Component } from 'react'

export default class formulario extends Component {
  render() {
    return (
        <section id="formulario">
            <div className="container">
                <h2>deixe aqui sua reclamacao/sugestao para a COP-30</h2>
                <form>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Mensagem"></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    )
  }
}
