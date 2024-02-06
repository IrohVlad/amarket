import React from 'react'
import MarketHero from '../components/marketHero/marketHero'
import Button from '../components/button/button'
import MarketSearch from './marketSearch/marketSearch'
import MarketCard from './marketCard/marketCard'
import MarketProducts from './marketProducts/marketProducts'

export default function Market() {
  return (
    <>
      <MarketHero image_url='/market/asian-engineer-manufacturing-industrial-product-2022-09-27-18-03-21-utc 1.png'>
        <div className=' text-white font-title font-semibold text-xl'>
          <div className='mb-6'>Доставка промышленой техники для всех</div>
          <div>Скидка до 45%</div>
        </div>
      </MarketHero>
      <section className='p-6 lg:px-8'>
        <div className='max-w-c-full m-auto px-10 py-11 shadow-md rounded-[10px] flex items-center gap-[35px]'>
          <Button className='px-7 py-2'>
            <div className=' text-title font-semibold text-sm'>Каталог</div>
          </Button>
          <div className='market-search max-w-[535px] w-full'>
          <MarketSearch/>
          </div>
        </div>
      </section>
      <section className='p-6 lg:px-8'>
        <div className='relative max-w-c-full m-auto grid grid-cols-[300px_1fr] gap-[25px]'>
          <div className=' sticky top-20 min-h-[400px] h-fit shadow-md rounded-[10px] mb-10'>

          </div>
          <MarketProducts/>
        </div>
      </section>
    </>
  )
}
