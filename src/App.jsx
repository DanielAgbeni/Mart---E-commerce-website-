/** @format */

import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import NewItem from './components/NewItem'
import {
	Outlet,
	RouterProvider,
	ScrollRestoration,
	createBrowserRouter,
} from 'react-router-dom'
import Cart from './pages/Cart'
import Signin from './pages/Signin'
import { productData } from './api/Api'
import Item from './components/Item'
import 'react-toastify/dist/ReactToastify.css'
const Layout = () => {
	return (
		<div className='bg-gray-100 w-full'>
			<Header />
			<ScrollRestoration />
			<Outlet />
			<Footer />
		</div>
	)
}
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: productData,
			},
			{
				path: '/item/:id',
				element: <Item />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/additem',
				element: <NewItem />,
			},
			{
				path: '/signin',
				element: <Signin />,
			},
		],
	},
])

const App = () => {
	return (
		<div className='h-screen bg-slate-100 font-bodyFont'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
