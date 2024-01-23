import React from 'react'
import Path from '../components/path/path'
import Map from './map/map'
import CountryCard from '../components/countryCard/countryCard'

export default function Network() {
  return (
    <>
        <section>
          <div className='max-w-c-full w-full mx-auto py-[34px] px-6'>
            <Path routes={['Главная', 'Оформить отправление', 'Где мы работаем']} className="text-black" />
          </div>
        </section>
        <Map/>
        <section>
          <div className='max-w-c-full w-full mx-auto py-[34px] px-6 flex justify-center flex-wrap gap-[30px] mb-[100px]'>
            <CountryCard country='Азия' cities={['Южная Корея', 'Китай']} />
            <CountryCard country='Европа' cities={['Турция', 'Россия']} />
            <CountryCard country='Америка' cities={['Мексика', 'Чили', 'Аргентина']} />
          </div>
        </section>
    </>
  )
}
