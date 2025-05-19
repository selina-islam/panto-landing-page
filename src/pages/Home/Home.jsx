import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import Product from '../Shop/Product'

const Home = () => {
  return (
    <section>
      <Hero />
      <WhyChoose />
      <Product headline='Best Selling Product'/>
    </section>
  )
}

export default Home