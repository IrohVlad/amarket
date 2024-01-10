import React from 'react'
import Image from 'next/image'
import Button from '../button/button'

export default function Panoram() {
  return (
    <section className='w-full'>
        <div className=' h-[703px] grid grid-cols-[1fr_minmax(410px,_40%)]'>
            <div className='relative px-10 py-[45px]'>
                <div className='flex flex-col h-full justify-end z-10 relative'>
                    <div className=' font-medium text-[18px] font-title'>Железнодорожные перевозки</div>
                    <div className='font-bold text-[28px] font-title mt-[10px]'>Надежный сервис железнодорожных грузоперевозок.</div>
                </div>
                <div className='h-full w-full absolute left-0 top-0'>
                    <Image src='/on-rails-man.png' alt='' fill={true} objectFit='cover' objectPosition='center' />
                </div>  
                <div className='bg-[#333333] opacity-35 h-full w-full absolute top-0 left-0'>

                </div>
            </div>
            <div className='bg-[#181818] pl-[80px] flex flex-col justify-center p'>
                <div className='max-w-[410px]'>
                    <div className=' font-title font-semibold text-2xl '>Транспорт</div>
                    <div className=' font-text pt-9'>Услуги по транспортировке гарантируют быстрое и своевременное прохождение грузов через границы.</div>
                    <div className='flex justify-between gap-10px mt-[72px]'>
                        <div>
                            <div className='flex items-center font-title text-[18px] font-semibold'>
                                <Image src='/Quality.svg' alt='Quality icon' width={28} height={28} className='mr-4' />
                                По морю
                            </div>
                            <div className='flex items-center font-title text-[18px] font-semibold mt-8'>
                                <Image src='/Quality.svg' alt='Quality icon' width={28} height={28} className='mr-4' />
                                По Ж/Д
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center font-title text-[18px] font-semibold'>
                                <Image src='/Quality.svg' alt='Quality icon' width={28} height={28} className='mr-4' />
                                По воздуху
                            </div>
                            <div className='flex items-center font-title text-[18px] font-semibold mt-8'>
                                <Image src='/Quality.svg' alt='Quality icon' width={28} height={28} className='mr-4' />
                                Наземная перевозка
                            </div>
                        </div>
                    </div>
                </div>
                <Button className='mt-[80px] px-4 py-3'>
                    <div className='flex items-center font-title font-semibold'>Больше наших сервисов <Image src="/Arrow.svg" alt='Arrow' width={16} height={8} className='ml-3'/></div>
                </Button>
            </div>
        </div>
    </section>
  )
}
