import React, {useState, useRef} from 'react'
import MarketCard from '../marketCard/marketCard'

export default function MarketProducts() {
  return (
    <div className='grid gap-x-9 gap-y-[50px] grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]'>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
          <MarketCard/>
    </div>
  )
}
