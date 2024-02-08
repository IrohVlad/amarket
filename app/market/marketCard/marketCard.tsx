import React from 'react'
import Image from 'next/image'

interface IMarketCardProps{
    img_url: string;
    title: string;
    price: number;
}

export default function MarketCard({img_url, title, price}:IMarketCardProps) {
  return (
    <article>
        <div className='relative h-[250px] rounded-2xl overflow-hidden after:block after:w-full after:h-full after:bg-[#00000020] after:absolute mb-5'>
            <Image className='w-full object-contain object-center' fill src={img_url} alt='product image' />
        </div>
        <div className=' font-text text-[black] font-semibold mb-1'>
            {title}
            
        </div> 
        <div className='font-title text-h-grey font-semibold text-[12px]'>
            Цена
        </div>
        <div className='font-text text-black font-semibold'>
            {price}
             <span>P</span>
        </div>
    </article>
  )
}
