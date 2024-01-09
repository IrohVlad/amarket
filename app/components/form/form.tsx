import React from 'react'
import Image from 'next/image'
import Button from '../button/button'

export default function Form() {
  return (
    <div className='flex items-center justify-between text-[black]'>
            <div className="max-w-[50%]">
                <div className=" text-[44px] font-bold mb-9">Оставайтесь на связи</div>
                <div className="text-[#6C6C6C] mb-[75px]">Свяжитесь с нами напрямую по телефону или заполните форму, чтобы получить бесплатную консультацию от нашего персонала.</div>
                <div className=" mb-7">
                    <div className="flex items-center mb-3">
                        <div className="mr-4">
                            <div><Image src="/tel.svg" width={24} height={24} alt="Tel"/></div>
                        </div>
                        <div className="text-[#6C6C6C] text-lg text-semibold">Номер телефона</div>
                    </div>
                    <div className=" font-bold text-[28px]">
                        (999) 555-01-03
                    </div>
                </div>
                <div className=" mb-7">
                    <div className="flex items-center mb-3">
                        <div className="mr-4">
                            <div><Image src="/mail.svg" width={24} height={24} alt="Mail"/></div>
                        </div>
                        <div className="text-[#6C6C6C] text-lg text-semibold">Email</div>
                    </div>
                    <div className=" font-semibold text-[18px]">
                        hello@cargopro.md
                    </div>
                </div>
                <div>
                    <div className="flex items-center mb-3">
                        <div className="mr-4">
                            <div><Image src="/point.svg" width={24} height={24} alt="Point"/></div>
                        </div>
                        <div className="text-[#6C6C6C] text-lg text-semibold">Адрес</div>
                    </div>
                    <div className=" font-semibold text-[18px]">
                        ТРЦ АВИАПАРК, 1 ЭТАЖ
                    </div>
                </div>
            </div>
            <div className='mt-[65px]'>
                <div className="flex items-center mb-[60px]">
                    <div className="mr-3"><Image src="/mail2.svg" width={34} height={34} alt="Mail"/></div>
                    <div className="font-bold text-[22px]">Напишите нам</div>
                </div>
                <form className="w-[520px]" action="">
                        <div className="mb-9"><input className="w-full font-title font-medium bg-inherit focus:outline-none border-b border-[#696969] h-[27px] transition-colors duration-300 focus:border-red caret-red" type="text" placeholder="Полное имя"/></div>
                        <div className="mb-9"><input className="w-full font-title font-medium bg-inherit focus:outline-none border-b border-[#696969] h-[27px] transition-colors duration-300 focus:border-red caret-red" type="text" placeholder="Номер телефона"/></div>
                        <div className="mb-9"><input className="w-full font-title font-medium bg-inherit focus:outline-none border-b border-[#696969] h-[27px] transition-colors duration-300 focus:border-red caret-red" type="text" placeholder="Email адрес"/></div>
                        <div className="mb-[60px]"><input className="w-full font-title font-medium bg-inherit focus:outline-none border-b border-[#696969] h-[79px] transition-colors duration-300 focus:border-red caret-red" type="text" placeholder="Сообщение"/></div>
                        <Button className='px-6 py-4' ><div className="flex font-semibold text-[white]"><Image className="mr-3" src="/send.svg" width={16} height={15} alt="Send"/> Отправить</div></Button>
                </form>
            </div>
            </div>
  )
}
