'use client'
import React from 'react'
import { Input, ConfigProvider } from 'antd'
import './style.css'

export default function MarketSearch() {
  return (
    <div className='market-search max-w-[535px] w-full'>
          <ConfigProvider
                        theme={{
                        token: {
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
              <Input.Search placeholder='Поиск товара' enterButton="Найти"/>
            </ConfigProvider>
    </div>
  )
}
