import React from 'react'
import telegram from "../../imgs/telegram.png"
import viber from "../../imgs/viber.png"
import whatsapp from "../../imgs/whatsapp.png"

const AboutUs = () => {
  return (
    <div className='md:flex md:justify-between md:items-center md:w-[350px] hidden'>
      <div>
      <p>+7 555 555-55-55</p>
      </div>
      <div className='flex justify-between items-center w-[100px]'>
        <img src={telegram} alt="tg" />
        <img src={viber} alt="vb" />
        <img src={whatsapp} alt="wh" />
      </div>
    </div>
  )
}

export default AboutUs