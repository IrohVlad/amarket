'use client'
import React from 'react'
import MarketNavbar from '../components/marketNavbar/marketNavbar'
import Image from 'antd';
import { Table } from 'antd'

const columns = [
    {
      title: 'Товар',
      dataIndex: 'product',
      key: 'product',
      render: (_: any, {product}: any) => {(
        <div className='flex items-center'>
            <img src={product[0]} alt='product image' />
            <div>{product[1]}</div>
        </div>
      )}
    },
    {
      title: 'Цена, РУБ',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Количество',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: 'Всего',
      key: 'summ',
      dataIndex: 'summ',
    }
  ];

  const data = [
    {
      key: 1,
      product: ['/market/phone.png', 
      'Смартфон Apple iPhone 15 Pro, 256 ГБ, (2 SIM), Blue Titanium',],
      price: '1',
      count: '1',
      summ: '1'
    }
  ]

export default function Basket({searchParams}: Record<'searchParams', any>) {
  return (
    <>
      <MarketNavbar searchParams={searchParams}/>
      <section className='py-6 lg:py-8 min-h-[1000px]'>
        <div className='max-w-c-full m-auto px-7 lg:px-8'>
        <div className=' p-7 lg:px-8 shadow-md rounded-[10px] border-[1px] border-[#D9D9D9] md:border-none md:p-0 md:shadow-none'>
          <div className=' text-black text-xl font-text after:block w-fit font-semibold after:bg-red after:h-[3px] after:w-full mb-5'>Ваш заказ</div>
            {/* <Table columns={columns} dataSource={data}/> */}
        </div>
        </div>
      </section>
    </>
  )
}
