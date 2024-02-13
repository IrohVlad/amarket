'use client'
import React from 'react'
import MarketSearch from '../marketSearch/marketSearch'
import Link from 'next/link'
import { TreeSelect } from 'antd'
import { useRouter } from 'next/navigation'
import './style.css'

const options = [
  {
    value: 'el',
    title: 'Электротехника',
    // icon:  <DevicePhoneMobileIcon className='w-6 h-6'/>,
    children: [
      {
        value: 'Телефоны',
        label: 'Смартфоны',
        children: [
          {
            value: 'poco2',
            label: 'omagad POCO',
            children: [
              {value: 'poco1',
              label: 'Смартфоныsssssssssssssssssss',}
            ]
          },
          {
            value: 'iphone',
            label: 'Iphone',
          },
          {
            value: 'xiomi',
            label: 'Xiomi',
          },
        ],
      },
    ],
  },
  {
    value: 'bit',
    title: 'Бытовая техника',
    children: [
      {
        value: 'home',
        title: 'Для дома',
        children: [
          {
            value: 'tel',
            title: 'Телевизоры',
          },
          {
            value: 'hol',
            title: 'Холодильники',
          },
          {
            value: 'stir',
            title: 'Стиральные машины',
          },
        ],
      },
      {
        value: 'care',
        title: 'Для здоровья',
        children: [
          {
            value: 'tooth',
            title: 'Зубные щетки',
          },
        ],
      },
    ],
  },
  
];



export default function MarketNavbar({searchParams}: Record<'searchParams', any>) {
  const router = useRouter()
  const CategoryChange = (value: string) => {
    const params = new URLSearchParams()
        Object.keys(searchParams).forEach((value: string) => {
            searchParams[value] && value != 'take' && value != 'skip' ? params.append(value, searchParams[value]) : ''
        })
      if(value){
        params.set('category' , value)
      } else {
        params.delete('category')
      }
    router.push(`/market?${params}`, {scroll: false})
  }
  return (
    <section className='py-6 lg:py-8 shadow-md border-bg-grey '>
        <div className='max-w-c-full m-auto px-6 lg:px-8'>
          <div className='flex items-center gap-[35px] justify-between'>
            <TreeSelect onChange={CategoryChange} treeIcon={true} allowClear={true} placeholder="Категории" treeData={options} dropdownStyle={{ maxHeight: 400, minWidth: 250, width: 'fit-content', overflowY: 'auto', }} style={{boxShadow: 'none', maxWidth: '150px', width: '100%'}}/>

            <div className='market-search max-w-[535px] w-full md:!hidden'>
            <MarketSearch searchParams={searchParams}/>
            </div>
            <Link href={'/basket'} className='flex flex-col items-center transition-colors duration-300 text-h-grey hover:text-a-grey cursor-pointer'>
              <svg className='md:w-8 md:h-8' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.25 15C6.94036 15 7.5 15.5597 7.5 16.25C7.5 16.9403 6.94036 17.5 6.25 17.5C5.55964 17.5 5 16.9403 5 16.25C5 15.5597 5.55964 15 6.25 15Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M13.75 15.0001C14.4403 15.0001 15 15.5597 15 16.2501C15 16.9405 14.4403 17.5001 13.75 17.5001C13.0597 17.5001 12.5 16.9405 12.5 16.2501C12.5 15.5597 13.0597 15.0001 13.75 15.0001Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M1.66797 2.5L1.88564 2.57653C2.9703 2.95787 3.51264 3.14855 3.82284 3.60248C4.13304 4.05642 4.13304 4.65938 4.13304 5.8653V8.13333C4.13304 10.5847 4.18574 11.3936 4.90774 12.1552C5.62974 12.9167 6.79178 12.9167 9.11589 12.9167H10.0013M13.535 12.9167C14.8358 12.9167 15.4862 12.9167 15.946 12.542C16.4057 12.1673 16.5371 11.5303 16.7996 10.2562L17.2161 8.23562C17.5054 6.78641 17.65 6.06181 17.2801 5.5809C16.9101 5.1 15.6461 5.1 14.242 5.1H9.18755M4.13304 5.1H5.83464" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <div className='font-title font-semibold md:hidden'>
              Корзина
              </div>
            </Link>
          </div>
          

          <div className='hidden market-search w-full md:block mt-5'>
            <MarketSearch searchParams={searchParams}/>
          </div>

          
        </div>
      </section>
  )
}
