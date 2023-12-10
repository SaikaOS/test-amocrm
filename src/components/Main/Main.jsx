import React from 'react'

const Main = () => {
  return (
    <div className='flex justify-between items-center text-[16px] flex-col md:flex-row'>
      <div className='mt-[40px] md:mt-0'>
        <p className='text-[36px] md:text-[48px]'>Зарабатывай больше</p>
        <p className='text-orange-500 text-[36px] md:text-[48px]'>с WELBEX</p>
        <span className='inline-block text-[18px] w-[275px] mt-4'>Развиваем и контролируем продажи за вас</span>
      </div>
      <div className='flex flex-col items-center pt-16'>
        <div className='text-center w-72'>
        <p className='text-[18px]'>Вместе с <span className='text-orange-500'>бесплатной консультацией</span> мы дарим:</p>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 text-center gap-10 my-10'>
          <div>
            <h3 className='uppercase'>Виджеты</h3>
            <p className='text-xs hidden md:inline'>30 готовых решений</p>
          </div>
          <div>
            <h3 className='uppercase'>Dashboard</h3>
            <p  className='text-xs hidden md:inline'>с показателями вашего бизнеса</p>
          </div>
          <div>
            <h3 className='uppercase'>Skype Аудит</h3>
            <p className='text-xs hidden md:inline'>отдела продажи CRM системы</p>
          </div>
          <div>
            <h3 className='uppercase'>35 дней</h3>
            <p className='text-xs hidden md:inline'>использования CRM</p>
          </div>
        </div>
        <button className='hidden md:block py-4 px-6 bg-blue-500 text-[16px] '>Получить консультацию</button>
      </div>
    </div>
  )
}

export default Main