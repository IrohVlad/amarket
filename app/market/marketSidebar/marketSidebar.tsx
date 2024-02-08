'use client'
import React from 'react'
import MarketPriceRange from './marketPriceRange/marketPriceRange'
import MarketFilters from './marketFilters/marketFilters'

export default function MarketSidebar({searchParams}: any) {
  return (
    <div className=' sticky top-20 min-h-[400px] h-fit shadow-md border-[1px] border-[#D9D9D9] rounded-[10px] mb-10 px-5 py-5'>
            <MarketPriceRange searchParams={searchParams}/>
            <MarketFilters searchParams={searchParams}/>
    </div>
  )
}
