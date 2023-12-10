import React from 'react'
import telegram from "../../imgs/telegram.png"
import viber from "../../imgs/viber.png"
import whatsapp from "../../imgs/whatsapp.png"

const Footer = () => {
  return (
    <footer className='flex justify-between mt-24 flex-col md:flex-row w-3/4 mx-auto'>
        <div>
            <div>
            <p className='text-gray-500 uppercase text-[14px]'>О компании</p>
            </div>
               <nav className='grid grid-rows-2 gap-x-2 mt-3 text-[14px]'>
               <a href="#">Партнёрская программа</a>
                <a href="#">Вакансии</a>
               </nav>
        </div>
        <div>
        <div>
        <p className='text-gray-500 uppercase text-[14px] mt-4 md:mt-0'>Меню</p>
        </div>
            <nav className='grid grid-cols-2 gap-x-2 mt-3 text-[14px]'>
                <a href="#">Расчёт стоимости</a>
                <a href="#">Кейсы</a>
                <a href="#">Услуги</a>
                <a href="#">Благодарственные письма</a>  
                <a href="#">Виджеты</a>
                <a href="#">Сертификаты</a>
                <a href="#">Интеграции</a>
                <a href="#">Блог на Youtube</a>
                <a href="#">Наши клиенты</a>
                <a href="#">Вопрос / Ответ</a>
            </nav>
        </div>
        <div className='text-[14px]'>
            <p className='text-gray-500 uppercase text-[14px] mb-3 mt-4 md:mt-0'>Контакты</p>
            <p className='mb-4 md:mb-2'>+7 555 555-55-55</p>
        <div className='flex justify-between items-center w-24 mb-3'>
            <img src={telegram} alt="tg" />
            <img src={viber} alt="vb" />
            <img src={whatsapp} alt="wh" />
      </div>
      <div>
        <p>Москва, Путевой проезд 3с1, к 902</p>
      </div>
      <div className='flex flex-col mt-12 mb-12 md:mb-0'>
        <span className='text-[12px]'>©WELBEX 2022. Все права защищены.</span>
        <span className='text-[12px]'>Политика конфиденциальности</span>
        <p></p>
      </div>
        </div>
    </footer>
  )
}

export default Footer