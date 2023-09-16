/** @format */

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Product from '../components/Product'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
	const [products, setProducts] = useState([])
	const data = useLoaderData()
	useEffect(() => {
		setProducts(data.data)
	}, [data])
	// console.log(products)

	return (
		<div>
			<Banner />
			<Product products={products} />
		</div>
	)
}

export default Home
