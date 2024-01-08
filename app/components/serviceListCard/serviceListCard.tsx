import React from 'react'
import Image from 'next/image'

interface IServiceListCard {
    title: string,
    text: string,
    icon_url: string
}

export default function ServiceListCard({title, text, icon_url}: IServiceListCard) {
  return (
    <div className='  min-h-[272px] rounded-md px-7 py-8 box-border hover:shadow-lg transition-shadow duration-300'>
        <div>
            <Image src={icon_url} alt='Service List Card Icon' width={52} height={52} />
        </div>
        <div className='mt-7'>
            <div className=' font-title font-semibold text-[22px] text-[black]'>{title}</div>
            <div className=' font-text text-[#6C6C6C] mt-6'>{text}</div>
        </div>
    </div>
  )
}
