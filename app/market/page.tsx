import React from 'react'
import MarketHero from '../components/marketHero/marketHero'
import MarketProducts from './marketProducts/marketProducts'
import MarketNavbar from '../components/marketNavbar/marketNavbar'
import { ReadonlyURLSearchParams } from 'next/navigation'
import { Pagination, ConfigProvider } from 'antd'
import MarketSidebar from './marketSidebar/marketSidebar'
import MarketPaginator from './marketPaginator/marketPaginator'
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

export default async function Market({searchParams}: any) {
  const data = await GetProducts(searchParams)
  return (
    <>
      <MarketNavbar searchParams={searchParams}/>
      <MarketHero image_url='/market/asian-engineer-manufacturing-industrial-product-2022-09-27-18-03-21-utc 1.png'>
        <div className=' text-white font-title font-semibold text-xl md:text-lg'>
          <div className='mb-6'>Доставка промышленой техники для всех</div>
          <div>Скидка до 45%</div>
        </div>
      </MarketHero>
      <ConfigProvider
                        theme={{
                        token: {
                            // Seed Token
                            // colorPrimary: 'gray'
                            colorPrimary: '#AB3534'
                        },
                        components: {
                            Select: {
                            borderRadius: 0,
                            },
                            Checkbox: {
                            colorPrimary: '#AB3534'
                            }
                        }
                        }}
                    >
      <section className='py-6 lg:py-8'>
        <div className='relative max-w-c-full m-auto px-6 lg:px-8 grid grid-cols-[300px_1fr] gap-[25px] md:grid-cols-1'>
          <MarketSidebar searchParams={searchParams}/>
          <MarketProducts data={data}/>
        </div>
      </section>
      <MarketPaginator total={data.total} searchParams={searchParams}/>
      </ConfigProvider>
    </>
  )
}