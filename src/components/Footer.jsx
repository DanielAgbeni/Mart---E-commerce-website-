/** @format */

import React from 'react'
import Logo from '../assets/index'
import { paymentCard } from '../assets/images'
import {
	FaFacebook,
	FaFirstOrder,
	FaGithub,
	FaInstagram,
	FaMobile,
	FaTwitter,
	FaUser,
	FaYoutube,
} from 'react-icons/fa'
import {
	MdEmail,
	MdHelpCenter,
	MdLocationPin,
	MdNotificationAdd,
	MdPhone,
	MdShoppingCartCheckout,
} from 'react-icons/md'

const Footer = () => {
	const onSubmit = () => {}
	return (
		<div className='bg-black text-[#949494] py-20 font-bodyFont md:w-screen px-5'>
			<div className='max-w-screen-xl mx-auto grid lg:grid-cols-4 md:grid-cols-1 md:justify-center md:items-center'>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center mx-auto mt-4'>
						<span className='font-bold text-2xl text-purple-600'>Mart</span>{' '}
						<img src={Logo} alt='' className='w-10' />
					</div>
					<div className='text-base flex flex-col gap-2 items-center justify-center'>
						<p>&copy; Daniel Agbeni</p>
						<img src={paymentCard} alt='' className='w-56 h-10' />
						<div className='flex gap-5 text-2xl text-gray-500'>
							<FaFacebook className='hover:text-white duration-300 cursor-pointer' />
							<FaGithub className='hover:text-white duration-300 cursor-pointer' />
							<FaTwitter className='hover:text-white duration-300 cursor-pointer' />
							<FaInstagram className='hover:text-white duration-300 cursor-pointer' />
							<FaYoutube className='hover:text-white duration-300 cursor-pointer' />
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-2 '>
					<h2 className='text-xl font-bold text-white font-bodyFont mb-4 mx-auto mt-4'>
						Locate Us
					</h2>
					<div className='text-base flex flex-col gap-2 items-center justify-center'>
						<p className='flex items-center'>
							<MdLocationPin className='text-xl text-center' /> No9. Agbeni Str,
							Orimerunmu, Ogun State
						</p>
						<p className='flex items-center'>
							<FaMobile className='text-xl' /> +2349041995875
						</p>
						<p className='flex items-center'>
							<MdPhone className='text-xl' /> +2349041995875
						</p>
						<p className='flex items-center'>
							<MdEmail className='text-xl' /> danielagbeni12@gmail.com
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-2 '>
					<h2 className='text-xl font-bold text-white font-bodyFont mb-4 mx-auto mt-4'>
						Profile
					</h2>
					<div className='text-base flex flex-col gap-2 items-center justify-center'>
						<p className='flex gap-1 hover:text-white duration-300 cursor-pointer items-center'>
							<FaUser className='text-xl' />
							<span>Account</span>
						</p>
						<p className='flex gap-1 hover:text-white duration-300 cursor-pointer items-center'>
							<MdShoppingCartCheckout className='text-xl' />
							<span>Checkout</span>
						</p>
						<p className='flex gap-1 hover:text-white duration-300 cursor-pointer items-center'>
							<FaFirstOrder className='text-xl ' />
							<span>Order tracking</span>
						</p>
						<p className='flex gap-1 hover:text-white duration-300 cursor-pointer items-center'>
							<MdHelpCenter className='text-xl ' />
							<span>Help & support</span>
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-0 my-auto mt-4'>
					<input
						type='email'
						placeholder='e-mail'
						className='bg-transparent border px-4 py-2 text-sm'
					/>
					<button
						className='bg-transparent border px-4 py-1 text-sm hover:bg-gray-300 hover:text-black active:bg-white font-bodyFont font-bold flex items-center justify-center gap-1'
						onClick={onSubmit}>
						<MdNotificationAdd className='text-xl' />
						Subscribe
					</button>
				</div>
			</div>
		</div>
	)
}

export default Footer
