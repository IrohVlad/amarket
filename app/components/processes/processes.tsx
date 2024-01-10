import React from 'react'
import Image from 'next/image'
import Button from '../button/button'

export default function Processes() {
  return (
    <section className='w-full relative'>
        <div className='max-w-c-full m-auto h-screen flex flex-col justify-center '>
            <div className='font-title text-2xl text-[black] font-bold'>
                Наши процессы
            </div>
            <div className='flex mt-[75px]'>
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
            </div>
            <div className='flex justify-between items-center gap-[45px] mt-[60px]'>
              <div className='max-w-[504px]'>
                <div className=' font-text text-[#6C6C6C]'>
                  Мы гарантируем строгое соблюдение всех процедур до, во время и после перевозки.
                </div>
                <ul className='text-[black] font-semibold font-title text-[18px] mt-10'>
                  <li className='flex items-center before:rotate-45 before:rounded-[2px] before:mr-3 before:min-h-[8px] before:min-w-[8px] before:h-[8px] before:w-[8px] before:bg-red'>Стандартные операционные процедуры по обслуживанию транспортных средств</li>
                  <li className='flex items-center before:rotate-45 before:rounded-[2px] before:mr-3 before:min-h-[8px] before:min-w-[8px] before:h-[8px] before:w-[8px] before:bg-red mt-6'>План управления транспортировкой</li>
                  <li className='flex items-center before:rotate-45 before:rounded-[2px] before:mr-3 before:min-h-[8px] before:min-w-[8px] before:h-[8px] before:w-[8px] before:bg-red mt-6'>Стандартные операционные процедуры для погрузки.</li>
                </ul>
                <div className='mt-20 flex'>
                  <Button className='px-4 py-3 mr-[30px]'><div className=' font-title font-semibold'>Посмотреть детали</div></Button>
                  <Image src='/red-arrow.svg' alt='Red Arrow' width={33} height={10}/>
                </div>
              </div>
              <div className='h-[474px] flex-1 relative'>
                <Image src="/warehouse.png" alt="Warehouse"  fill={true} objectFit='cover' objectPosition='center' className='h-full w-full' />
              </div>
            </div>
        </div>
    </section>
  )
}
