import React from 'react'
import ServiceHero from '../components/serviceHero/serviceHero'
import ClientsGrid from './clientsGrid/clientsGrid'
import ClientCard from './clientCard/clientCard'

export default function Clients() {
  return (
    <>
        <ServiceHero title='Клиенты' routes={['Главная', 'Клиенты']} className='bg-[linear-gradient(90deg,rgba(171,53,52,0.7)0%,rgba(255,7,5,0.5)100%)]'     />
        <section className=' relative'>
            <div className='max-w-c-full mt-[120px] mb-6 mx-auto grid grid-cols-[410px_1fr] gap-x-[52px]'>
                <div className=' font-title text-black font-bold text-2xl'>
                    Мы рады, что вы выбрали именно нас
                </div>
                <div className=' h-screen px-[58px] border-l-[1px] border-[#00000050] flex flex-col gap-[30px] overflow-auto z-10'>
                    <ClientCard name='Name  ' subname='SUBName' icon_url='/home/container.png' description='С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.' />
                    <ClientCard name='Name  ' subname='SUBName' icon_url='/home/container.png' description='С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.' />
                    <ClientCard name='Name  ' subname='SUBName' icon_url='/home/container.png' description='С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.' />
                    <ClientCard name='Name  ' subname='SUBName' icon_url='/home/container.png' description='С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.' />
                    <ClientCard name='Name  ' subname='SUBName' icon_url='/home/container.png' description='С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.' />
                </div>
            </div>
            <div className=' absolute bottom-0 left-0 h-[40%] w-full bg-[linear-gradient(0deg,rgba(196,196,196,1)0%,rgba(255,255,255,0)100%)]'>
                
            </div>
        </section>
        <ClientsGrid/>
    </>
  )
}
