/** @format */

import React, { useState } from 'react'
import Logo from '../assets/index'
import dp from './me.jpg'
import {
	MdShoppingCart,
	MdLogout,
	MdAdd,
	MdLogin,
	MdMenu,
	MdAddBox,
} from 'react-icons/md'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { categories } from '../api/data'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import user from '../assets/user.png'

const Header = () => {
	const [menu, setMenu] = useState(false)
	const userInfo = useSelector((state) => state.mart.userInfo)
	const toggleMenu = () => {
		setMenu(!menu)
	}
	const productData = useSelector((state) => state.mart.productData)
	console.log(productData)
	return (
		<div className='w-full h-20 bg-gray-200 border-b-[1px] border-b-gray-800 font-bodyFont sticky top-0 z-10 md:w-screen'>
			<div className='max-w-screen-xl h-full mx-auto hidden md:flex items-center justify-between'>
				<div className='flex items-center'>
					<span className='font-bold text-2xl text-purple-600'>Mart</span>{' '}
					<img src={Logo} alt='' className='h-10 w-10' />
				</div>
				<div className='flex items-center gap-8'>
					<ul className='flex items-center gap-8'>
						<Link to={'/'}>
							<li
								className='text-base text-black
						 font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
								Home
							</li>
						</Link>
						<li
							className='text-base text-black
						 font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
							<select
								name=''
								id=''
								className='border-2 border-gray-200 bg-gray-200 w-fit'>
								<option
									value='other'
									className='text-base text-black outline-none border-hidden'>
									Select Category
								</option>
								{categories &&
									categories.map((item) => (
										<option
											key={item.id}
											className='text-base border-hidden outline-none capitalize bg-white text-headingColor w-fit'
											value={item.urlParamName}>
											{item.name}
										</option>
									))}
							</select>
						</li>
						<li
							className='text-base text-black
						 font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
							Shop
						</li>
						{userInfo && userInfo.id === 'Y0kIuLssFabWBKlgtGj7KAK6udI3' ? (
							<Link to={'/additem'}>
								<li
									className='text-black
						 font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 text-2xl'>
									<MdAddBox />
								</li>
							</Link>
						) : (
							''
						)}
					</ul>
					<Link to={'/cart'}>
						<div className='relative'>
							<MdShoppingCart className='w-8 h-8 cursor-pointer' />
							{productData.length < 1 ? (
								''
							) : (
								<div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-700 flex items-center justify-center '>
									<p className='text-xm text-white font-semibold'>
										{productData.length}
									</p>
								</div>
							)}
						</div>
					</Link>
					{userInfo && userInfo.name ? (
						<p>{`Welcome, ${userInfo.name}`}</p>
					) : (
						''
					)}
					<Link to={'/signin'}>
						<img
							src={userInfo ? userInfo.image : user}
							alt=''
							className='w-10 min-w-[40px] h-10 min-h-[40px] rounded-full drop-shadow-2xl cursor-pointer'
						/>
					</Link>
				</div>
			</div>

			{/* mobile view */}
			<div className='flex items-center justify-between md:hidden w-screen h-full mx-0 px-2'>
				<Link to={'/cart'}>
					<div className='relative' onClick={() => setMenu(false)}>
						<MdShoppingCart className='w-8 h-8 cursor-pointer' />
						{productData.length < 1 ? (
							''
						) : (
							<div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-700 flex items-center justify-center '>
								<p className='text-xm text-white font-semibold'>
									{productData.length}
								</p>
							</div>
						)}
					</div>
				</Link>
				<div className='flex items-center' onClick={() => setMenu(false)}>
					<span className='font-bold text-2xl text-purple-600'>Mart</span>{' '}
					<Link to={'/'}>
						<img src={Logo} alt='' className='h-10 w-10' />
					</Link>
				</div>
				<div className='flex items-center ml-2'>
					<MdMenu className='text-3xl' onClick={toggleMenu} />
				</div>
				{menu && (
					<motion.div
						initial={{ opacity: 0, scale: 0.6 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.6 }}
						className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-3 item-center justify-center'>
						<Link to={'/signin'}>
							<motion.img
								whileTap={{ scale: 0.8 }}
								src={userInfo ? userInfo.image : user}
								alt='Avatar'
								className='w-10 min-w-[60px] h-10 min-h-[60px] mt-3 rounded-full mx-auto drop-shadow-3xl cursor-pointer '
								onClick={() => setMenu(false)}
								// title={user ? user.displayName : 'Not Signed in'}
							/>
						</Link>
						<p className='item-center justify-center mx-auto py-3'>
							{userInfo ? userInfo.name : 'Not Signed in'}
						</p>
						<ul className='flex flex-col gap-1 '>
							<Link to={'/'}>
								<li
									className='text-base text-black
						 font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 transition-all ease-in-out px-4 py-2'
									onClick={() => setMenu(false)}>
									Home
								</li>
							</Link>
							<li
								className='text-base text-black
						 font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 transition-all ease-in-out px-4 py-2'>
								<select
									name=''
									id=''
									className='border-0 outline-none bg-gray-50'>
									<option
										value='other'
										className='text-base text-black border-0 outline-none font-bold'>
										Select Category
									</option>
									{categories &&
										categories.map((item) => (
											<option
												key={item.id}
												className='text-base border-0 outline-none capitalize bg-white text-headingColor'
												value={item.urlParamName}>
												{item.name}
											</option>
										))}
								</select>
							</li>
							<li
								className='text-base text-black
						 font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 transition-all ease-in-out px-4 py-2'
								onClick={() => setMenu(false)}>
								Shop
							</li>
							{userInfo && userInfo.id === 'Y0kIuLssFabWBKlgtGj7KAK6udI3' ? (
								<Link to={'/additem'}>
									<li
										className='text-base text-black
							font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 transition-all ease-in-out px-4 py-2'
										onClick={() => setMenu(false)}>
										Add Item
									</li>
								</Link>
							) : (
								''
							)}
						</ul>
					</motion.div>
				)}
			</div>
		</div>
	)
}

export default Header
