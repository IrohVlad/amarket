import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IServiceCardProps{
    img_url: string;
    title: string;
    route_url: string;
}

export default function ServiceCard({img_url, title, route_url}: IServiceCardProps) {
  return (
    <Link href="/services/railway" className="relative p-6 flex flex-col justify-end h-[440px] overflow-hidden bg-black">
        <Image className=" w-full h-full object-cover absolute top-0 left-0 z-0 transition-all duration-500 hover:scale-125 hover:opacity-50" fill src="/services/cargo-truck-on-the-mountain-truck-on-road-cargo-2021-08-26-16-36-15-utc 1.png" alt=""/>
        <div className="flex items-center relative z-10 font-bold text-white text-[22px] pb-3 border-b border-white border-opacity-50"> <div className=" mr-3"><Image src="/services/pre.svg" height={21} width={16} alt="Pre"/></div> Автомобильные перевозки</div>
    </Link>
  )
}
