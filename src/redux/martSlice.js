/** @format */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	productData: [],
	userInfo: null,
}

export const martSlice = createSlice({
	name: 'mart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = state.productData.find(
				(item) => item.id === action.payload.id
			)
			if (item) {
				item.quantity += action.payload.quantity
			} else {
				state.productData.push(action.payload)
			}
		},
		deleteItem: (state, action) => {
			state.productData = state.productData.filter(
				(item) => item.id !== action.payload
			)
		},
		resetCart: (state) => {
			state.productData = []
		},
		increamentQty: (state, action) => {
			const item = state.productData.find(
				(item) => item.id === action.payload.id
			)
			if (item) {
				item.quantity++
			}
		},
		decrementQty: (state, action) => {
			const item = state.productData.find(
				(item) => item.id === action.payload.id
			)
			if (item) {
				item.quantity == 1 ? 1 : item.quantity--
			}
		},
	},
})
export const { addToCart, deleteItem, resetCart, increamentQty, decrementQty } =
	martSlice.actions
export default martSlice.reducer
