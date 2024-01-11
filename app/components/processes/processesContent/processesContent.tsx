"use client"
import React, {useState, useRef} from 'react'
import "./style.css"
import {Transition, TransitionGroup} from "react-transition-group"
import Image from 'next/image'
import Button from '../../button/button'

const duration = 300;

interface TransitionStyles {
  entering: React.CSSProperties;
  entered: React.CSSProperties;
  exiting: React.CSSProperties;
  exited: React.CSSProperties;
}
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles: TransitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0, position: 'absolute', top: 0, left: 0 },
  exited:  { opacity: 0, position: 'absolute' },
};

interface IProcessesContentProps{
  img_url: string,
  description: string,
  list: Array<string>
}

export default function ProcessesContent({img_url, description, list}: IProcessesContentProps) {
  const nodeRef = useRef(null);
  return (
    <TransitionGroup className=" relative">
    <Transition key={img_url} nodeRef={nodeRef} timeout={duration}>
      {state => (<div ref={nodeRef} className={'flex justify-between items-center gap-[45px] mt-[60px] w-full'} style={{...defaultStyle, ...transitionStyles[state]}}>
              <div className='max-w-[504px]'>
                <div className=' font-text text-[#6C6C6C]'>
                  {description}
                </div>
                <ul className='text-[black] font-semibold font-title text-[18px] mt-10'>
                  {list?.map((value)=>{
                    return <li className='flex items-center before:rotate-45 before:rounded-[2px] before:mr-3 before:min-h-[8px] before:min-w-[8px] before:h-[8px] before:w-[8px] before:bg-red mt-6'>{value}</li>
                  })}
                  {/* <li className='flex items-center before:rotate-45 before:rounded-[2px] before:mr-3 before:min-h-[8px] before:min-w-[8px] before:h-[8px] before:w-[8px] before:bg-red'>Стандартные операционные процедуры по обслуживанию транспортных средств</li>
                  <li className='flex items-center before:rotate-45 before:rounded-[2px] before:mr-3 before:min-h-[8px] before:min-w-[8px] before:h-[8px] before:w-[8px] before:bg-red mt-6'>План управления транспортировкой</li>
                  <li className='flex items-center before:rotate-45 before:rounded-[2px] before:mr-3 before:min-h-[8px] before:min-w-[8px] before:h-[8px] before:w-[8px] before:bg-red mt-6'>Стандартные операционные процедуры для погрузки.</li> */}
                </ul>
                <div className='mt-20 flex'>
                  <Button className='px-4 py-3 mr-[30px]'><div className=' font-title font-semibold'>Посмотреть детали</div></Button>
                  <Image src='/red-arrow.svg' alt='Red Arrow' width={33} height={10}/>
                </div>
              </div>
              <div className='h-[474px] flex-1 relative'>
                <Image src={img_url} alt="Warehouse" fill  className='w-full h-full object-cover object-center relative' />
              </div>
        </div>)}
    </Transition>
    </TransitionGroup>
  )
}
