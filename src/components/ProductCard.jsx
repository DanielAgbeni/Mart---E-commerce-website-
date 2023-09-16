/** @format */

import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
	const navigate = useNavigate()
	const id = product.title
	const handleDetails = () => {
		const idString = id.toLowerCase().split(' ').join('')
		navigate(`/item/${idString}`, {
			state: {
				item: product,
			},
		})
	}
	// console.log(product)
	return (
		<div className='group relative'>
			<div
				className='w-full h-96 cursor-pointer overflow-hidden'
				onClick={handleDetails}>
				<img
					className='w-full h-full object-cover group-hover:scale-110 duration-500'
					src={product.image}
					alt=''
				/>
			</div>
			<div className='w-full border-[1px] px-2 py-4'>
				<div className='flex justify-between items-center'>
					<div>
						<h2 className='font-bodyFont text-base font-bold'>
							{product.title.substring(0, 15)}
						</h2>
					</div>
					<div className='flex gap-2 relative'>
						<div className='flex text-sm relative w-28 justify-end gap-2'>
							<p className='line-through text-gray-500'>${product.oldPrice}</p>
							<p className='font-semibold'>${product.price}</p>
						</div>
						<p className='cursor-pointer flex items-center'>
							<FaCartPlus className='text-xl hover:text-2xl duration-500 md:text-2xl' />
						</p>
					</div>
				</div>
				<div>
					<p>{product.category}</p>
				</div>
				<div className='absolute top-4 right-0'>
					{product.isNew && (
						<p className='bg-black text-white font-semibold font-bodyFont px-6 py-1'>
							Sale
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductCard
