/** @format */

import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cart from './pages/Cart'
import Signin from './pages/Signin'
import { productData } from './api/Api'
const Layout = () => {
	return (
		<div>
			<Header />
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
				path: '/cart',
				element: <Cart />,
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
