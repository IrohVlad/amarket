import React, {useState, useRef} from 'react'
import MarketCard from '../marketCard/marketCard'

export default function MarketProducts({data}: any) {
  return (
    <div className='grid gap-x-9 gap-y-[50px] grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]'>
      { data?.data?.length && data?.data?.map((value: any)=>{
        return (<MarketCard id={value.id} key={value.id} img_url={value.pictureUrl} title={value.name} price={value.price}/>)
      })}

    </div>
  )
}
