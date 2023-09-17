/** @format */

import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Item = () => {
	const [details, setDetails] = useState({})
	const location = useLocation()
	useEffect(() => {
		setDetails(location.state.item)
	}, [])
	// console.log(details)
	let qty

	const qtyMinus = () => {
		// let qty
		qty == 1 ? 1 : qty--
		console.log(qty)
	}
	const qtyAdd = () => {
		// let qty
		return qty++
	}
	console.log(qty)
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
				<div className='w-full relative'>
					<img
						src={details.image}
						alt=''
						className='w-full h-[550px] object-cover'
					/>
					<div className='absolute top-4 right-0'>
						{details.isNew && (
							<p className='bg-black text-white font-semibold font-bodyFont px-6 py-1'>
								New
							</p>
						)}
					</div>
				</div>
				<div className='w-full flex flex-col sm:justify-center lg:justify-start lg:items-start sm:items-center gap-4'>
					<h2 className='text-4xl font-semibold'>{details.title}</h2>
					<div className='flex gap-3 item-center mt-3'>
						<p className='line-through text-gray-500'>${details.oldPrice}</p>
						<p className='font-semibold'>${details.price}</p>
					</div>
					<div className='flex items-center text-base gap-2 mt-10'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
					</div>
					<p>{details.description}</p>
					<div className=''>
						<div className='flex items-center gap-4'>
							<p className='text-sm'>Quantity</p>
							<div className='flex items-center gap-4'>
								<button onClick={qtyMinus}>
									<FaMinus className='active:text-white active:bg-black' />{' '}
								</button>
								<p>{qty}</p>
								<button onClick={qtyAdd}>
									<FaPlus className='active:text-white active:bg-black' />{' '}
								</button>
							</div>
							<motion.div
								className='py-2 px-6 bg-black cursor-pointer'
								whileTap={{ scale: 1.1 }}>
								<p>
									<FaCartPlus className='text-white' />{' '}
								</p>
							</motion.div>
						</div>
					</div>
					<div className='flex items-center gap-2'>
						<p>Category:</p>
						<p className='font-bold'>{details.category}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Item
