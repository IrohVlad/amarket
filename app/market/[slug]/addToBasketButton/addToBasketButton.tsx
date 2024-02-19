'use client'
import React from 'react'
import Button from '@/app/components/button/button'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/app/redux/store'
import { addItems } from '@/app/redux/slices/basketSlice'

export default function AddToBasketButton({id, name, price, image}: any) {
    const dispatch = useDispatch()
    const addToBasket = React.useCallback(() =>{
        dispatch(addItems({id, name, price, image}))
    }, [])
  return (
    <Button className='py-3 px-10 min-w-[300px] ss:min-w-0' onClick={()=>{addToBasket()}}>
        <div className='font-text text-base text-center'>Добавить в корзину</div>
    </Button>
  )
}
