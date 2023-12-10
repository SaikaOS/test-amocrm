import React from 'react'
import Navbar from '../navbar/Navbar'
import AboutUs from '../about-us/AboutUs'

const Header = () => {
  return (
    <header className='flex justify-between items-center md:w-[1140px]'>
        <Navbar />
        <AboutUs />
    </header>
  )
}

export default Header