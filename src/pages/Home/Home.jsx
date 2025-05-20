import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import Product from '../Shop/Product'
import Experiences from './Expreiences'
import Meaterial from './Meaterial'

const Home = () => {
  return (
    <section>
      <Hero />
      <WhyChoose />
      <Product headline='Best Selling Product' />
      <Experiences />
      <Meaterial/>
    </section>
  )
}

export default Home