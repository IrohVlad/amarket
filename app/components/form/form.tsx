"use client"
import React, {useState, useEffect, InputHTMLAttributes, ReactNode} from 'react'
import Image from 'next/image'
import InputMask from 'react-input-mask';

export default function Form() {
    const [data, setData] = useState({name: '', phone: '', mail: '', message: ''});
    const [error, setError] = useState({isValid: true, message: ''})

    const validateForm = () => {

        if (!data.name.trim() && data.name.length == 0) {
            setError({isValid: false, message: 'Имя пользователя обязательно'})
            return
        }
        if (!data.phone.trim()) {
            setError({isValid: false, message: 'Номер телефона обязателен'})
            return
        }
        if (!data.mail.trim()) {
            setError({isValid: false, message: 'Email обязателен'})
            return
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.mail.trim())) {
            setError({isValid: false, message: 'Введите корректный email'})
            return
        }
        if (!data.message.trim()) {
            setError({isValid: false, message: 'Сообщение обязателен'})
            return
        }
        else {
            setError({isValid: true, message: ''})
        }
    };

    return (
        <>
            <h2 className="text-[black] text-[44px] font-bold w-full mb-9 sm:text-xl ss:text-lg ">Оставайтесь на
                связи</h2>
            <div className='flex items-center justify-between text-[black] 2lg:flex-col 2lg:gap-16'>
                <div className="max-w-[50%] 2lg:max-w-[100%]">
                    <p className="text-[#6C6C6C] mb-[75px] 2lg:w-3/4 sm:w-full">Свяжитесь с нами напрямую по телефону
                        или заполните форму, чтобы получить бесплатную консультацию от нашего персонала.</p>
                    <ul className='2lg:flex 2lg:justify-between sm:flex-col sm:justify-start'>
                        <li className=" mb-7 2lg:mb-0 sm:mb-5">
                            <div className="flex items-center mb-3 sm:mb-1">
                                <div className="mr-4">
                                    <div><Image src="/tel.svg" width={24} height={24} alt="Tel"/></div>
                                </div>
                                <div className="text-[#6C6C6C] text-lg text-semibold">Номер телефона</div>
                            </div>
                            <div className=" font-bold 2lg:font-semibold 2xl:text-[18px] text-[28px]">
                                (999) 555-01-03
                            </div>
                        </li>
                        <li className=" mb-7 2lg:mb-0 sm:mb-5">
                            <div className="flex items-center mb-3 sm:mb-1">
                                <div className="mr-4">
                                    <div><Image src="/mail.svg" width={24} height={24} alt="Mail"/></div>
                                </div>
                                <div className="text-[#6C6C6C] text-lg text-semibold">Email</div>
                            </div>
                            <div className=" font-semibold text-[18px]">
                                hello@asiafy.ru
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center mb-3 sm:mb-1">
                                <div className="mr-4">
                                    <div><Image src="/point.svg" width={24} height={24} alt="Point"/></div>
                                </div>
                                <div className="text-[#6C6C6C] text-lg text-semibold">Адрес</div>
                            </div>
                            <div className=" font-semibold text-[18px]">
                                ТРЦ АВИАПАРК, 1 ЭТАЖ
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='2lg:w-full'>
                    <div className="flex items-center mb-[60px] sm:mb-7">
                        <div className="mr-3"><Image src="/mail2.svg" width={34} height={34} alt="Mail"/></div>
                        <div className="font-bold text-[22px] ss:text-lg">Напишите нам</div>
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault()

                        validateForm()
                        if (!error.isValid) {
                            console.log(error.message)
                        } else {
                            console.log('Все ок')
                            console.log(data.phone)
                        }
                    }} className="w-[520px] 2lg:w-full" action="">
                        <div className="mb-9 sm:mb-5"><input onChange={(e) => {
                            setData({...data, name: e.target.value})
                        }} value={data.name} type='text'
                                                             className="w-full font-title font-medium bg-inherit focus:outline-none border-b border-[#696969] h-[27px] transition-colors duration-300 focus:border-red caret-red"
                                                             placeholder="Полное имя"/></div>
                        <div className="mb-9 sm:mb-5">
                            <InputMask
                                mask="+7(999)999-99-99"
                                placeholder="Номер телефона"
                                className="w-full font-title font-medium bg-inherit focus:outline-none border-b border-[#696969] h-[27px] transition-colors duration-300 focus:border-red caret-red"
                                onChange={(e) => {
                                    setData({...data, phone: e.target.value})
                                }}
                                value={data.phone}
                                type={'tel'}
                            />
                        </div>
                        <div className="mb-9 sm:mb-5"><input onChange={(e) => {
                            setData({...data, mail: e.target.value})
                        }} value={data.mail} type='email'
                                                             className="w-full font-title font-medium bg-inherit focus:outline-none border-b border-[#696969] h-[27px] transition-colors duration-300 focus:border-red caret-red"
                                                             placeholder="Email адрес"/></div>
                        <div className="mb-[60px] sm:mb-10"><input onChange={(e) => {
                            setData({...data, message: e.target.value})
                        }} value={data.message} type='text'
                                                                   className="w-full font-title font-medium bg-inherit focus:outline-none border-b border-[#696969] h-[79px] transition-colors duration-300 focus:border-red caret-red"
                                                                   placeholder="Сообщение"/></div>
                        <button type='submit'
                                className='bg-red hover:bg-light-red transition-colors duration-300 cursor-pointer w-fit rounded-[4px] px-6 py-4 sm:px-4 sm:py-3'>
                            <div className="flex font-semibold text-[white]"><Image className="mr-3" src="/send.svg"
                                                                                    width={16} height={15}
                                                                                    alt="Send"/> Отправить
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
