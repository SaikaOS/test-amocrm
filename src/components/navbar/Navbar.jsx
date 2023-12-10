import React from 'react'
import logo from "../../imgs/logo.png"
import title from "../../imgs/title.png"

const Navbar = () => {
  return (
    <nav className="flex items-center">
      <div className='w-[150px] pt-10 md:block hidden'>
      <img src={logo} alt="logo" />
        <img src={title} alt="title" />
        <p className='text-[10px] mt-2'>
        крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>
        <ul className='flex justify-between w-[420px]'>
          <li>
            
            <a className='text-[10px]'>
              Услуги
            </a>
          </li>
          <li>
            <a className='text-[10px]'>
              Виджеты
            </a>
          </li>
          <li>
            <a className='text-[10px]'>
              Интеграции
            </a>
          </li>
          <li>
            <a className='text-[10px]'>
              Кейсы
            </a>
          </li>
          <li>
            <a className='text-[10px]'>
              Сертификаты
            </a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar