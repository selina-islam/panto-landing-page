import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { FaBagShopping, FaBars } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';


const navItems = [
  {path:'/', element:'Home' },
  {path:'/about', element:'About Us' },
  {path:'/contact', element:'Contact' },
  {path:'/shop', element:'Shop' },
]

const NavItems = ({handleToggle}) => (
 <ul className='flex flex-col md:flex-row items-center gap-6'>
    {
      navItems.map((item, index) => (
        <li key={index} onClick={handleToggle}>
          <NavLink to={item.path} className={({ isActive }) =>
            isActive
            ? 'text-primary font-bold'
            :''
          }>{item.element}</NavLink>
        </li>
      ))
    }
  </ul>
)

const Navbar = () => {
const [isOpen, setIsOpen]= useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }



  return (
    <header className="">
      <nav className="max-w-7xl container mx-auto flex justify-between items-center py-6 md:px-4 px-2">
        {/* logo  */}
        <NavLink to="/" className="font-bold">
          Panto
        </NavLink>
        {/* hamburger menu for mobile */}
        <div onClick={handleToggle} className='md:hidden text-xl cursor-pointer'>
         
          {
            isOpen ? null: <FaBars/>
          }


        </div>
        {/* desktop menu items */}
        <div className="hidden md:block">
          <NavItems />
        </div>

        {/* mobile menu items */}
        <div className={` fixed top-0 left-0 h-screen w-full bg-black/80 flex items-center  justify-center text-white transition-transform transform md:hidden ${isOpen? 'translate-x-0': '-translate-x-full'}`}>
          <div className='cursor-pointer absolute top-0 right-0 py-6 px-3 text-xl' onClick={handleToggle}>
            <FaTimes/>
          </div>
          <NavItems handleToggle={ handleToggle} />
        </div>
        {/* cart icons */}
        <div className="hidden md:block cursor-pointer relative">
          <FaBagShopping className="text-xl" />
          <sup className="absolute top-0 -right-3 bg-primary w-5 h-5 rounded-full flex items-center justify-center text-xs">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
}

export default Navbar