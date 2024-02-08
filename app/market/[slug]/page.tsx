'use client'
import React from 'react'
import MarketNavbar from '@/app/components/marketNavbar/marketNavbar'
import Image from 'next/image'
import Button from '@/app/components/button/button'
import Link from 'next/link'
import Carousel from '@/app/components/carousel/carousel'

const data = [
  {
    title: 'Описание'
  },
  {
    title: 'Оплата'
  },
  {
    title: 'Доставка'
  }
]

export default function Page({params, searchParams}: any) {
  const [index, setIndex] = React.useState(0)
  return (
    <>
      <MarketNavbar searchParams={searchParams}/>
      <div className=' text-black'>{params.slug}</div>
      <section className='py-6 lg:py-8'>
        <div className='max-w-c-full m-auto p-7 lg:px-8 shadow-md rounded-[10px] border-[1px] border-[#D9D9D9]'>
          <div className='grid grid-cols-[500px_1fr] gap-3 min-h-[500px] mb-20'>
            <div className='relative'>
              <Image fill className='object-contain object-center' src='/market/phone.png' alt='product image' />
            </div>
            <div>
              <div className='flex items-center text-black font-text font-semibold text-[32px] mb-8'>
                <Image height={45} width={45} className='mr-[10px]' src='/market/apple.svg' alt='brend icon'/>
                Apple
              </div>
              <div className='font-text text-black text-xl font-semibold mb-4'>
                Смартфон Apple iPhone 15 Pro, 256 ГБ, (2 SIM), Blue Titanium
              </div>
              <div className='flex justify-between gap-3'>
                <div>
                  <div className='font-text text-h-grey font-semibold mb-6'>
                    Цена:
                    <div className='font-text text-black text-xl font-semibold'>
                      95 000 <span>P</span>
                    </div>
                  </div>
                  <ul className='mb-10'>
                    <li className='mb-5'>
                      <div className=' text-h-grey font-semibold font-text mb-2'>Тип SIM-карты: 2 SIM</div>
                      <ul className='text-black font-medium font-text flex gap-2 flex-wrap'>
                        <li className='px-5 py-1 border-[1px] rounded transition-colors duration-300 border-h-grey hover:border-red cursor-pointer'>2 SIM</li>
                        <li className='px-5 py-1 border-[1px] rounded transition-colors duration-300 border-h-grey hover:border-red cursor-pointer'>eSIM+SIM</li>
                      </ul>
                    </li>
                    <li className='mb-5'>
                      <div className=' text-h-grey font-semibold font-text mb-2'>Встроенная память: 256 гб</div>
                      <ul className='text-black font-medium font-text flex gap-2 flex-wrap'>
                        <li className='px-5 py-1 border-[1px] rounded transition-colors duration-300 border-h-grey hover:border-red cursor-pointer'>128 гб</li>
                        <li className='px-5 py-1 border-[1px] rounded transition-colors duration-300 border-h-grey hover:border-red cursor-pointer'>256 гб</li>
                      </ul>
                    </li>
                  </ul>
                  <Button className='py-3 px-10 min-w-[300px]'>
                    <div className='font-text text-base text-center'>Добавить в корзину</div>
                  </Button>
                </div>
                <div className='py-[10px] px-[15px] rounded-[7px] bg-bg-grey max-w-[250px] w-full flex flex-col justify-between'>
                  <div>
                    <div className='text-sm font-text font-semibold text-black mb-2'>Характеристики</div>
                    <div className='text-black font-text text-sm leading-[26px]'>
                    Тип корпуса: классический <br/> Материал корпуса: титан<br/>Степень защиты: IP68<br/>Количество SIM-карт: 2<br/>Тип SIM-карты: nanoSim<br/>Вес: 187 г<br/>Размеры (ШxВxТ): 70.6x146.6x8.25 мм
                    </div>
                  </div>
                  <Link className=' text-[#3891E3] font-text font-medium text-sm' href={'#'}>Все характеристики</Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Carousel data={data} active={index} setter={setIndex} className="w-[50%] text-lg" />
          </div>
          <div >

          </div>
        </div>
      </section>
    </>
  )
}
