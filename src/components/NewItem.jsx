/** @format */

import React, { useState } from 'react'
import {
	MdDelete,
	MdDescription,
	MdFileUpload,
	MdOutlineMoney,
	MdShop,
} from 'react-icons/md'
import { categories } from '../api/data'
import Loading from './Loading'
import { FaMoneyBill } from 'react-icons/fa'
import { motion } from 'framer-motion'

const NewItem = () => {
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState('')
	const [category, setCategory] = useState(null)
	const [description, setDescription] = useState('')
	const [imageAsset, setImageAsset] = useState(null)
	const [fields, setFields] = useState(false)
	const [alertStatus, setAlertStatus] = useState('danger')
	const [msg, setMsg] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	return (
		<div className='w-full h-auto flex items-center justify-center top-20'>
			<div className='w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
				{fields && (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
							alertStatus === 'danger'
								? 'bg-red-400 text-red-800'
								: 'bg-emerald-400 text-emerald-800'
						}`}>
						{msg}
					</motion.p>
				)}
				<div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
					<MdShop className='text-xl text-gray-700' />
					<input
						type='text'
						required
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder='Give me a title...'
						className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
					/>
				</div>
				<div className='w-full'>
					<select
						onChange={(e) => setCategory(e.target.value)}
						className='outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'>
						<option value='other' className='bg-white'>
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
				</div>
				<div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg'>
					{isLoading ? (
						<Loading />
					) : (
						<>
							{!imageAsset ? (
								<>
									<label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
										<div className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
											<MdFileUpload className='text-gray-500 text-8xl hover:text-gray-700' />
											<p className='text-gray-500 hover:text-gray-700'>
												Click here to upload
											</p>
										</div>
										<input
											type='file'
											name='uploadimage'
											accept='image/*'
											// onChange={uploadImage}
											className='w-0 h-0'
										/>
									</label>
								</>
							) : (
								<>
									<div className='relative h-full'>
										<img
											src={imageAsset}
											alt='uploaded image'
											className='w-full h-full object-cover'
										/>
										<button
											type='button'
											className='absolute bottom-3 right-3 p-3 rounded-full bg-black text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out'
											// onClick={deleteImage}
										>
											<MdDelete className='text-white' />
										</button>
									</div>
								</>
							)}
						</>
					)}
				</div>

				<div className='w-full flex flex-col md:flex-row items-center gap-3'>
					<div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
						<FaMoneyBill className='text-gray-700 text-2xl line-through' />
						<input
							type='text'
							required
							// value={oldprice}
							onChange={(e) => setCalories(e.target.value)}
							placeholder='Old Price'
							className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
						/>
					</div>

					<div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
						<MdOutlineMoney className='text-gray-700 text-2xl' />
						<input
							type='text'
							required
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							placeholder='Price'
							className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
						/>
					</div>
				</div>
				<div className='w-full h-14 py-2 border-b border-gray-300 flex items-center gap-2'>
					<MdDescription className='text-xl text-gray-700' />
					<input
						type='text'
						required
						value={description}
						onChange={(e) => setTitle(e.target.value)}
						placeholder='Description'
						className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
					/>
				</div>

				<div className='flex items-center w-full'>
					<motion.button
						whileTap={{ scale: 1.2 }}
						type='button'
						className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-black hover:bg-gray-500 active: px-12 py-2 line-throughrounded-lg text-lg text-white font-semibold'>
						Save
					</motion.button>
				</div>
			</div>
		</div>
	)
}

export default NewItem
