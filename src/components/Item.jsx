/** @format */

import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { addToCart } from '../redux/martSlice'

const Item = () => {
	const [details, setDetails] = useState({})
	const location = useLocation()
	useEffect(() => {
		setDetails(location.state.item)
	}, [])
	// console.log(details)
	let [qty, setQty] = useState(1)

	const qtyMinus = () => {
		setQty(qty == 1 ? 1 : qty - 1)
	}
	const qtyAdd = () => {
		setQty(qty + 1)
	}
	// console.log(qty)
	const dispatch = useDispatch()
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full px-2 py-6'>
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
							<p className='text-xl'>Quantity</p>
							<div className='flex items-center gap-4'>
								<button onClick={qtyMinus}>
									<FaMinus className='active:text-white active:bg-black' />{' '}
								</button>
								<p className='font-bold'>{qty}</p>
								<button onClick={qtyAdd}>
									<FaPlus className='active:text-white active:bg-black' />{' '}
								</button>
							</div>
							<motion.div
								className='py-2 px-6 bg-black cursor-pointer'
								whileTap={{ scale: 1.1 }}
								onClick={() =>
									dispatch(
										addToCart({
											id: details.id,
											title: details.title,
											image: details.image,
											price: details.price,
											quantity: qty,
											description: details.description,
										})
									) & toast.success(`${details.title} is added`)
								}>
								<p>
									<FaCartPlus className='text-white' />{' '}
								</p>
							</motion.div>
						</div>
					</div>
					<div className='flex items-center gap-2 sm:mb-10'>
						<p className='text-xl'>Category:</p>
						<p className='font-bold text-xl'>{details.category}</p>
					</div>
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

export default Item
