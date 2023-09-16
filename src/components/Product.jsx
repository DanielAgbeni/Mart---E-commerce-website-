/** @format */

import React from 'react'
import ProductCard from './ProductCard'

const Product = ({ products }) => {
	// console.log(products)
	return (
		<div className='py-10'>
			<div className='flex flex-col items-center justify-center gap-4'>
				<h1 className='2xl bg-white text-black py-2 w-80 text-center border-[1px] border-black rounded hover:bg-black hover:text-white hover:cursor-crosshair transition-transform-duration-1000'>
					Shopping Everyday
				</h1>
				<span className='w-20 h-[3px] bg-black'></span>
				<p className='max-w-[700px] text-gray-600 text-center'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
					tenetur, ullam aperiam, esse dolores soluta consequuntur veniam maxime
					necessitatibus laboriosam saepe autem alias aliquam veritatis fuga
					architecto sequi doloribus quas.
				</p>
			</div>
			<div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
				{products
					? products.map((item) => (
							<ProductCard key={item._id} product={item} />
					  ))
					: 'Nothing to show'}
			</div>
		</div>
	)
}

export default Product
