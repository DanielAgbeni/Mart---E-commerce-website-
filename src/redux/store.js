/** @format */

import { configureStore } from '@reduxjs/toolkit'
import martReducer from './martSlice'

export const store = configureStore({
	reducer: {
		mart: martReducer,
	},
})
