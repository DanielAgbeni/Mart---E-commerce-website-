/** @format */

import React from 'react'
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Cart = () => {
	const productData = useSelector((state) => state.mart.productData)
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full px-7 py-6'>
				<div className='justify-center'>
					<p className='flex items-center gap-2 text-2xl  font-bodyFont'>
						Shopping Cart <FaShoppingCart />{' '}
					</p>
					<div>
						{productData.map((item) => (
							<div
								key={item.id}
								className='flex flex-col items-center justify-center w-full relative'>
								<div>
									<img src={item.image} alt='product img' className='h-96 ' />
								</div>
								<div className='border-solid border-[2px] px-8 py-2 mb-10 items-center justify-center flex flex-col'>
									<div>
										<p className='text-xl'>{item.title}</p>
									</div>
									<div className='flex items-center justify-center gap-5'>
										<p>${item.price}</p>
										<div className='flex items-center gap-4 border-solid border-[2px] px-3'>
											<p className='text-base'>Quantity</p>
											<div className='flex items-center gap-4'>
												<button>
													<FaMinus className='active:text-white active:bg-black' />{' '}
												</button>
												<p className='font-bold'>{8}</p>
												<button>
													<FaPlus className='active:text-white active:bg-black' />{' '}
												</button>
											</div>
										</div>
										<p>${899}</p>
									</div>
								</div>
								<div className='absolute top-4 right-0'>
									<MdCancel className='text-4xl' />
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='px-10 h-3/2 py-14 flex flex-col gap-7 bg-slate-200 rounded-md'>
					<p className='text-3xl'>Cart Total</p>
					<div className='flex items-center gap-28'>
						<p className='text-xl'>subtotal</p>
						<p className='text-xl font-semibold'>${489}</p>
					</div>
					<div className='flex items-center gap-28'>
						<p className='text-xl'>Shipping</p>
						<p className='text-xl font-semibold'>$10</p>
					</div>
					<div className='h-1 bg-black'></div>
					<div className='flex items-center justify-between'>
						<p className='text-xl'>Total</p>
						<p>-</p>
						<p className='text-xl font-bold'>$499</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
// 01679317
