import React from 'react'
import ServiceHero from '../components/serviceHero/serviceHero'

export default function Questions() {
  return (
    <>
        <ServiceHero title='Часто задаваемые вопросы' routes={['Главная', 'Часто задаваемые вопросы']} className='bg-[linear-gradient(90deg,rgba(171,53,52,0.7)0%,rgba(255,7,5,0.5)100%)]'     />
        <section>
            <div className='max-w-c-full mt-[120px] mb-6 mx-auto'>
                <div className=' font-title text-black font-bold text-2xl max-w-[550px]'>
                    О чем нас спрашивают наши клиенты
                </div>
            </div>
        </section>
    </>
  )
}
