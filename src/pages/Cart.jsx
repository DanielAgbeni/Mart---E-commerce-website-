/** @format */

import React, { useEffect, useState } from 'react'
import {
	FaLongArrowAltLeft,
	FaMinus,
	FaPlus,
	FaShoppingCart,
} from 'react-icons/fa'
import { MdArrowLeft, MdCancel } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	decrementQty,
	deleteItem,
	increamentQty,
	resetCart,
} from '../redux/martSlice'
import { ToastContainer, toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { emptyCart } from '../assets/images'

let items = []
const Cart = () => {
	const productData = useSelector((state) => state.mart.productData)
	const userInfo = useSelector((state) => state.mart.userInfo)

	const [qty, setQty] = useState(1)
	const [tot, setTot] = useState(0)
	const dispatch = useDispatch()
	const [checkout, setCheckout] = useState(false)
	useEffect(() => {
		let totalPrice = 0
		productData.map((item) => {
			totalPrice += item.price * item.quantity
			return totalPrice
		})
		setTot(totalPrice)
	}, [productData])
	console.log(tot)
	const handleCheckout = () => {
		if (userInfo) {
			setCheckout(true)
		} else {
			toast.error('Sign in to checkout')
		}
	}
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full px-7 py-6'>
				<div className='justify-center'>
					<p className='flex items-center gap-2 text-4xl  font-bodyFont font-bold mb-7'>
						Shopping Cart <FaShoppingCart />{' '}
					</p>
					{productData.length === 0 ? (
						''
					) : (
						<div className='flex items-center justify-between'>
							<Link to={'/'}>
								<p className='flex items-center gap-5 justify-center text-blue-600 hover:underline'>
									{' '}
									<FaLongArrowAltLeft />
									go shopping
								</p>
							</Link>
							<motion.p
								whileTap={{ scale: 0.75 }}
								className='flex items-center gap-2  px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base w-20'
								onClick={() =>
									dispatch(resetCart()) & toast.error(`Cart is cleared`)
								}>
								Clear <MdCancel />
							</motion.p>
						</div>
					)}
					<div>
						{productData.length >= 1 ? (
							productData.map((item) => (
								<div
									key={item.id}
									className='flex flex-col items-center justify-center w-full'>
									<div className='border-solid border-[2px] relative'>
										<img src={item.image} alt='product img' className='h-96 ' />
										<div className='absolute top-4 right-0'>
											<MdCancel
												className='text-4xl hover:text-red-700 cursor-pointer'
												onClick={() =>
													dispatch(deleteItem(item.id)) &
													toast.error(`${item.title} is removed`)
												}
											/>
										</div>
									</div>
									<div className='border-solid border-[2px] px-8 py-2 mb-10 items-center justify-center flex flex-col'>
										<div>
											<p className='text-xl'>{item.title}</p>
										</div>
										<div className='flex items-center justify-center gap-5'>
											<p>${item.price}</p>
											<div className='flex items-center gap-4 border-solid border-[2px] px-3'>
												<p className='text-xl'>Quantity</p>
												<div className='flex items-center gap-4'>
													<button>
														<FaMinus
															className='active:text-white active:bg-black text-xl'
															onClick={() => {
																dispatch(
																	decrementQty({
																		id: item.id,
																		title: item.title,
																		image: item.image,
																		price: item.price,
																		quantity: qty,
																		description: item.description,
																	})
																)
															}}
														/>{' '}
													</button>
													<p className='font-bold text-xl'>{item.quantity}</p>
													<button>
														<FaPlus
															className='active:text-white active:bg-black text-xl'
															onClick={() => {
																dispatch(
																	increamentQty({
																		id: item.id,
																		title: item.title,
																		image: item.image,
																		price: item.price,
																		quantity: qty,
																		description: item.description,
																	})
																)
															}}
														/>{' '}
													</button>
												</div>
											</div>
											<p>${item.price * item.quantity}</p>
										</div>
									</div>
								</div>
							))
						) : (
							<div className='flex flex-col items-center justify-center py-36'>
								<p className='text-red-500'>
									You have not added any item to your cart
								</p>
								<Link to={'/'}>
									<p className='flex items-center gap-5 justify-center text-blue-600 hover:underline'>
										{' '}
										<FaLongArrowAltLeft />
										go shopping
									</p>
								</Link>
							</div>
						)}
					</div>
				</div>
				{/* Total section */}
				{tot ? (
					<div className='px-10 h-[400px] py-14 flex flex-col gap-7 bg-slate-200 rounded-md mt-10 lg:fixed right-1'>
						<p className='text-3xl font-semibold'>Cart Total</p>
						<div className='flex items-center gap-28'>
							<p className='text-xl'>subtotal</p>
							<p className='text-xl font-semibold'>${tot}</p>
						</div>
						<div className='flex items-center gap-28'>
							<p className='text-xl'>Shipping</p>
							<p className='text-xl font-semibold'>$10</p>
						</div>
						<div className='h-2 bg-black'></div>
						<div className='flex items-center justify-between'>
							<p className='text-xl'>Total</p>
							<p>-</p>
							<p className='text-xl font-bold'>${tot + 10}</p>
						</div>
						<button
							onClick={handleCheckout}
							className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
							{userInfo ? 'Proceed to checkout' : 'Sign in to checkout'}
						</button>
					</div>
				) : (
					<div className='h-[400px]'>
						<img src={emptyCart} alt='' className='h-full' />
					</div>
				)}
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

export default Cart
// 01679317
