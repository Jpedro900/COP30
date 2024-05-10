import React, { Component } from 'react'
import Sobre from '../sobre/sobre';
import Noticias from '../noticias/noticias';
import Noticiasmob from '../noticiasmob/noticiasmob';


export default class main extends Component {
  render() {
    return (
        <main>
            <Sobre />
            {window.innerWidth > 780 ?
              <div>
                <Noticias />
              </div>
              :
              <div>
                <Noticiasmob />
              </div>
            }
        </main>
    )
  }
}
