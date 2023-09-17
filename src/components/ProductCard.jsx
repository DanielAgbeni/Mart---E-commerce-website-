/** @format */

import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../redux/martSlice'
import { ToastContainer, toast } from 'react-toastify'

const ProductCard = ({ product }) => {
	const dispatch = useDispatch()
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
						<p
							className='cursor-pointer flex items-center'
							onClick={() =>
								dispatch(
									addToCart({
										id: product.id,
										title: product.title,
										image: product.image,
										price: product.price,
										quantity: 1,
										description: product.description,
									})
								) & toast.success(`${product.title} is added`)
							}>
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
							New
						</p>
					)}
				</div>
			</div>
			<ToastContainer
				position='top-left'
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</div>
	)
}

export default ProductCard
