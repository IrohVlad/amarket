import React from 'react'
import Image from 'next/image'

export default function ClientsGrid() {
  return (
    <section>
      <div className='max-w-c-full mt-[120px] mx-auto p-6 flex flex-col items-center'>
        <h2 className=' font-bold text-2xl font-title text-black mt-[120xp] mb-20'>Наши клиенты</h2>
        <div className=' w-full grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] mb-40 gap-x-[150px] gap-y-8'>
          <div className=' relative h-[150px]'>
            <Image src='/clients/Group 104.svg' className='h-full' fill alt='client icon' />
          </div>
          <div className=' relative h-[150px]'>
            <Image src='/clients/Group 104.svg' className='h-full' fill alt='client icon' />
          </div>
          <div className=' relative h-[150px]'>
            <Image src='/clients/Group 104.svg' className='h-full' fill alt='client icon' />
          </div>
          <div className=' relative h-[150px]'>
            <Image src='/clients/Group 104.svg' className='h-full' fill alt='client icon' />
          </div>
          <div className=' relative h-[150px]'>
            <Image src='/clients/Group 104.svg' className='h-full' fill alt='client icon' />
          </div>
          <div className=' relative h-[150px]'>
            <Image src='/clients/Group 104.svg' className='h-full' fill alt='client icon' />
          </div>
          <div className=' relative h-[150px]'>
            <Image src='/clients/Group 104.svg' className='h-full' fill alt='client icon' />
          </div>
          <div className=' relative h-[150px]'>
            <Image src='/clients/Group 104.svg' className='h-full' fill alt='client icon' />
          </div>
          <div className=' relative h-[150px]'>
            <Image src='/clients/Group 104.svg' className='h-full' fill alt='client icon' />
          </div>
          <div className=' relative h-[150px]'>
            <Image src='/clients/Group 104.svg' className='h-full' fill alt='client icon' />
          </div>
          <div className=' relative h-[150px]'>
            <Image src='/clients/Group 104.svg' className='h-full' fill alt='client icon' />
          </div>
          <div className=' relative h-[150px]'>
            <Image src='/clients/Group 104.svg' className='h-full' fill alt='client icon' />
          </div>
        </div>
      </div>
    </section>
  )
}
