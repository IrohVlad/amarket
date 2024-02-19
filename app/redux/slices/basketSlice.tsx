'use client'
import { createSlice } from "@reduxjs/toolkit"

export interface IBasketItem {
    id: string;
    name: string;
    price: number;
    image: string;
    amount: number;
}

export interface IBasketState {
    value: Array<IBasketItem | null>
}

const initialState: IBasketState = {
    value: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItems: (state, action)=>{
            state.value = [...state.value, ...action.payload]
        }
    }
})

export const {addItems} = basketSlice.actions
export default basketSlice.reducer
