/** @format */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import martReducer from './martSlice'
import persistReducer from 'redux-persist/es/persistReducer'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}
const persistedReducer = persistReducer(persistConfig, martReducer)

export const store = configureStore({
	reducer: {
		mart: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export let persistor = persistStore(store)
