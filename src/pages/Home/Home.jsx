import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import Product from '../Shop/Product'
import Experiences from './Expreiences'
import Meaterial from './Meaterial'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <section>
      <Hero />
      <WhyChoose />
      <Product headline='Best Selling Product' />
      <Experiences />
      <Meaterial />
      <Testimonial/>
    </section>
  )
}

export default Home