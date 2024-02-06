import React from 'react'
import Image from 'next/image'

export default function MarketCard() {
  return (
    <article>
        <div className='relative h-[250px] rounded-2xl overflow-hidden after:block after:w-full after:h-full after:bg-[#00000020] after:absolute mb-5'>
            <Image className='w-full object-contain object-center' fill src={'/market/phone.png'} alt='product image' />
        </div>
        <div className=' font-text text-[black] font-semibold mb-1'>
            Смартфон Apple iPhone 15 Pro, 256 ГБ, (2 SIM), Blue Titanium
        </div> 
        <div className='font-title text-h-grey font-semibold text-[12px]'>
            Цена
        </div>
        <div className='font-text text-black font-semibold'>
            95 000 <span>P</span>
        </div>
    </article>
  )
}
