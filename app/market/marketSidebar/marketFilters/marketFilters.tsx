'use client'
import React, {useState, useEffect} from 'react'
import {Checkbox } from 'antd'
import { useRouter } from 'next/navigation'

export default function MarketFilters({searchParams}: any) {
  const router = useRouter()
  const onChange = (e: any) => {
    const params = new URLSearchParams()
        Object.keys(searchParams).forEach((value: string) => {
            searchParams[value] && value != 'take' && value != 'skip' ? params.append(value, searchParams[value]) : ''
        })
    if(e.target.checked){
        params.set(e.target.value , '1')
    } else {
        params.delete(e.target.value)
    }
    router.push(`/market?${params}`)
  }
  return (
    <div>
        <div className='font-title font-semibold text-black mb-3'>Фильтры</div>
        <Checkbox onChange={onChange} value={'sale'}>Лютые скидки</Checkbox>
        <Checkbox onChange={onChange} value={'overprice'}>Лютыый оверпрайс</Checkbox>
    </div>
  )
}
