import React from 'react'
import Image from 'next/image'

interface IRathProps{
    routes: Array<string>,
    className?: string
}

export default function Path({routes, className}: IRathProps) {
  return (
    <div className={" text-lg font-medium flex items-center " + className}>
    <div className='flex ss:flex-col'>
        {routes.length && routes.map((value, index, arr)=>{
            return (
                <div key={index} className='flex items-center'>
                    <div className='sm:text-base ss:border-b-white ss:border-b-[1px]'>{ value }</div>
                    {index != arr.length - 1 && <svg className="mx-3 sm:mx-2 ss:hidden" width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.454916 13.9658C0.206533 13.7223 0.183953 13.3413 0.387175 13.0727L0.454916 12.9958L6.06118 7.50001L0.454916 2.0042C0.206533 1.7607 0.183953 1.37966 0.387175 1.11116L0.454916 1.03423C0.703299 0.790731 1.09198 0.768595 1.36587 0.967822L1.44434 1.03423L7.54508 7.01503C7.79347 7.25853 7.81605 7.63956 7.61282 7.90807L7.54508 7.98499L1.44434 13.9658C1.17112 14.2336 0.728137 14.2336 0.454916 13.9658Z" fill="currentColor"/></svg>}
                </div>
            )
        })}
    </div>
    </div>
  )
}