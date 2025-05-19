import React from 'react'
import Product from './Product'

const Shop = () => {
  return (
    <section className='min-h-screen'>
      <div className='w-full h-[400px] bg-cover bg-center flex items-center justify-center bg-[url("/hero.png")]'>
        <h1 className='text-4xl font-bold text-white'>Shop Our Product</h1>
      </div>
      <Product headline='Whats Your Choice'/>
    </section>
  )
}

export default Shop