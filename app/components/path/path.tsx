import React from 'react'
import Image from 'next/image'

interface IRathProps{
    routes: Array<string>
}

export default function Path({routes}: IRathProps) {
  return (
    <div className=" text-lg font-medium flex items-center">
    <div className='flex ss:flex-col'>
        {routes.length && routes.map((value, index, arr)=>{
            return (
                <div key={index} className='flex'>
                    <div className='sm:text-base ss:border-b-white ss:border-b-[1px]'>{ value }</div>
                    {index != arr.length - 1 && <Image className="mx-3 sm:mx-2 ss:hidden" width={7.5} height={13} src="/small_Arrow.svg" alt="Arrow"/>}
                </div>
            )
        })}
    </div>
    </div>
  )
}
