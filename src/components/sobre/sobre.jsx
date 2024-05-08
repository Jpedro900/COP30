import React, { Component } from 'react'
import Carousel from '../carrossel/carrossel'

export default class  extends Component {
  render() {
    return (
        <section>
          <div className=' w-full'>
            <Carousel/>
          </div>
          <div className=' font-Body w-[90%] mx-auto'>
            <h1 className=' text-center text-4xl uppercase'>O que e a COP30?</h1>
            <p className=' text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo esse a aliquam, iure natus vel ab, repellendus laboriosam pariatur repudiandae maxime ea accusantium, earum fugiat mollitia neque commodi velit odio possimus recusandae nulla autem accusamus? Magni aperiam amet, harum omnis adipisci architecto, perspiciatis rem id earum incidunt, ipsa hic minima beatae assumenda? Modi dolore minus itaque expedita. Sed consectetur ipsum debitis dicta quam ab impedit cum sit mollitia quod ullam aut tempore repudiandae itaque, quisquam eum unde sunt deleniti molestias corrupti magnam ad natus vero est. Deserunt, assumenda laborum. Quas adipisci excepturi obcaecati praesentium ut accusamus consectetur dignissimos sit?</p>
          </div>
        </section>
    )
  }
}
