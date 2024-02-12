import React from 'react'
import MarketStat from './marketStat/marketStat'

const data = [
    {
        title: 'Встроенная память',
        values: [
            {
                text: '16 Гб',
                value: 'val1'
            },
            {
                text: '32 Гб',
                value: 'val2'
            },
            {
                text: '64 Гб',
                value: 'val3'
            },
        ]
    },
    {
        title: 'Объем оперативной памяти',
        values: [
            {
                text: '8 Гб',
                value: 'val4'
            },
            {
                text: '16 Гб',
                value: 'val5'
            },
            {
                text: '32 Гб',
                value: 'val6'
            },
        ]
    }
]

export default function MarketStats({searchParams}: any) {
  return (
    <div>
        {data.map((value, index)=>{
            return <MarketStat key={index} title={value.title} values={value.values} searchParams={searchParams}/>
        })}
    </div>
  )
}
