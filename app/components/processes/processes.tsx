"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Button from '../button/button'
import Carousel from '../carousel2/carousel'
import ProcessesContent from './processesContent/processesContent'

export default function Processes() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const data = [
    {
      title: 'Перед отправкой',
      img_url: '/warehouse.png',
      description: 'Мы гарантируем строгое соблюдение всех процедур до, во время и после перевозки.',
      list: [
        'Стандартные операционные процедуры по обслуживанию транспортных средств',
        'План управления транспортировкой',
        'Стандартные операционные процедуры для погрузки.'
      ]
    },
    {
      title: 'Во время отправки',
      img_url: '/container.png',
      description: 'Не мы гарантируем строгое соблюдение всех процедур до, во время и после перевозки.',
      list: [
        'Стандартные операционные процедуры по обслуживанию транспортных средств',
        'Стандартные операционные процедуры для погрузки.'
      ]
    },
    {
      title: 'После отправки',
      img_url: '/containers.png',
      description: 'Мы гарантируем строгое соблюдение всех процедур до, во время и после перевозки.',
      list: [
        'План управления транспортировкой',
        'Стандартные операционные процедуры для погрузки.'
      ]
    },
  ]
  return (
    <section className='w-full relative'>
        <div className='max-w-c-full m-auto h-screen flex flex-col justify-center '>
            <h2 className='font-title text-2xl text-[black] font-bold sm:text-xl'>
                Наши процессы
            </h2>
            {/* <div className='flex mt-[75px]'>
              <div>
                <div className='pr-[100px] font-title text-[black] font-semibold font-sm'>Перед отправкой</div>
                <div className='h-1 w-full bg-red mt-3'>
                  
                </div>
              </div>
              <div>
                <div className='px-[100px] font-title text-[#6C6C6C] font-semibold font-sm'>Перед отправкой</div>
                <div className='h-1 w-full bg-[#EDEDED] mt-3'>
                  
                </div>
              </div>
              <div className=' flex-1'>
                <div className='px-[100px] font-title text-[#6C6C6C] font-semibold font-sm'>Перед отправкой</div>
                <div className='h-1 w-full bg-[#EDEDED] mt-3'>
                  
                </div>
              </div>
              <div>

              </div>
            </div> */}
            <Carousel data={data} setter={setCurrentIndex} active={currentIndex} />
            <ProcessesContent list={data[currentIndex].list} description={data[currentIndex].description} img_url={data[currentIndex].img_url}/>
        </div>
    </section>
  )
}
