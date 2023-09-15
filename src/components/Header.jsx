/** @format */

import React from 'react'
import Logo from '../assets/index'
import dp from './me.jpg'
import { MdShoppingCart, MdLogout, MdAdd, MdLogin } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className='w-full h-20 bg-slate-200 border-b-[1px] border-b-gray-800 font-bodyFont sticky top-0 z-10'>
			<div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
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
							Pages
						</li>
						<li
							className='text-base text-black
						 font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
							Shop
						</li>
						<li
							className='text-base text-black
						 font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
							Element
						</li>
					</ul>
					<Link to={'/cart'}>
						<div className='relative'>
							<MdShoppingCart className='w-8 h-8 cursor-pointer' />
							<div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-700 flex items-center justify-center '>
								<p className='text-xm text-white font-semibold'>6</p>
							</div>
						</div>
					</Link>
					<Link to={'/signin'}>
						<img
							src={dp}
							alt=''
							className='w-10 min-w-[40px] h-10 min-h-[40px] rounded-full drop-shadow-2xl cursor-pointer'
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
