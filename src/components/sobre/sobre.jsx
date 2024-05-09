import React, { Component } from 'react'
import Carousel from '../carrossel/carrossel'

export default class  extends Component {
  render() {
    return (
        <section id='sobre' className=' mt-[64.5px] '>
          <div className=' w-full'>
            <Carousel/>
          </div>
          <div className=' font-Body w-[90%] mx-auto mb-8'>
            <h1 className=' text-center text-4xl uppercase mb-4 underline'>O que é uma cop?</h1>
            <p className=' text-center text-xl'>
              A COP (Conferência das Partes) é um dos eventos mais importantes relacionados às mudanças climáticas, reunindo representantes de quase todos os países do mundo para discutir políticas e medidas. Realizada anualmente desde 1995, visa avançar nas negociações internacionais sobre mudanças climáticas, buscando consensos e estabelecendo metas para reduzir emissões de gases de efeito estufa e promover a adaptação e mitigação. A organização envolve selecionar o local, definir a agenda, convidar participantes e realizar negociações intensas. Ao final, é produzido um documento final, conhecido como "acordo climático", que resume os compromissos assumidos. Estes são fundamentais para enfrentar a crise climática e proteger o futuro do planeta.
            </p>
          </div>
        </section>
    )
  }
}
