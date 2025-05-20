import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import Product from '../Shop/Product'
import Experiences from './Expreiences'
import Meaterial from './Meaterial'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <section>
      <Hero />
      <WhyChoose />
      <Product headline='Best Selling Product' />
      <Experiences />
      <Meaterial/>
      <Testimonials/>
    </section>
  )
}

export default Home