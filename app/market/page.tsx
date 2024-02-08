import React from 'react'
import MarketHero from '../components/marketHero/marketHero'
import Button from '../components/button/button'
import MarketSearch from '../components/marketSearch/marketSearch'
import MarketProducts from './marketProducts/marketProducts'
import MarketNavbar from '../components/marketNavbar/marketNavbar'
import Link from 'next/link'
import { ReadonlyURLSearchParams } from 'next/navigation'
type TypeMarket = {
  searchParams: Object
}

const GetProducts = async (searchParams: any) => {
  const params = new URLSearchParams()
  Object.keys(searchParams).forEach((value: string) => {
    searchParams[value] && value != 'take' && value != 'skip' ? params.append(value, searchParams[value]) : ''
  })
  params.append('take', '9')
  if('page' in searchParams){
    params.append('skip', String(+searchParams.page * 9 - 9))
  }
  const response = await fetch(`http://147.45.110.102/api/v1/market?${params}`).then((data) => data.json())
  console.log(response)
  return response
}

export default async function Market({searchParams}: TypeMarket) {
  const data = await GetProducts(searchParams)
  return (
    <>
      <MarketNavbar/>
      <MarketHero image_url='/market/asian-engineer-manufacturing-industrial-product-2022-09-27-18-03-21-utc 1.png'>
        <div className=' text-white font-title font-semibold text-xl'>
          <div className='mb-6'>Доставка промышленой техники для всех</div>
          <div>Скидка до 45%</div>
        </div>
      </MarketHero>
      <section className='py-6 lg:py-8'>
        <div className='relative max-w-c-full m-auto px-6 lg:px-8 grid grid-cols-[300px_1fr] gap-[25px]'>
          <div className=' sticky top-20 min-h-[400px] h-fit shadow-md rounded-[10px] mb-10'>

          </div>
          <MarketProducts data={data}/>
        </div>
      </section>
    </>
  )
}