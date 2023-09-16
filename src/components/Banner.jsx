/** @format */

import React, { useState } from 'react'
import { bannerImgOne, bannerImgThree, bannerImgTwo } from '../assets/images'
import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md'
import { motion } from 'framer-motion'

const Banner = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
	}
	const nextSlide = () => {
		setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
	}
	// setInterval(() => {
	// 	setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
	// 	console.log(currentSlide)
	// }, 1000)
	// console.log(currentSlide)
	const imgData = [bannerImgOne, bannerImgTwo, bannerImgThree]
	return (
		<div className='w-full h-auto overflow-x-hidden md:w-screen'>
			<div className='w-screen h-full relative'>
				<motion.div
					// style={{ transform: `translateX(-${currentSlide * 100}vh)` }}
					className='w-screen h-full flex transition-transform-duration-3000 '>
					<motion.img
						whileHover={{ scale: 1.0 }}
						className='w-screen h-full object-cover overflow-hidden hover:cursor-pointer'
						src={imgData[currentSlide]}
						alt='bannerImg'
						loading='priority'
					/>
					{/* <img
						className='w-screen h-full object-cover'
						src={imgData[1]}
						alt='bannerImg'
						loading='priority'
					/>
					<img
						className='w-screen h-full object-cover'
						src={imgData[2]}
						alt='bannerImg'
						loading='priority'
					/> */}
				</motion.div>
				<div className='w-fit absolute left-0 right-0 mx-auto flex gap-5 bottom-0'>
					<motion.div
						whileTap={{ scale: 1.2 }}
						onClick={prevSlide}
						className='w-14 h-12 flex items-center justify-center hover:cursor-pointer '>
						<MdArrowCircleLeft className='w-14 h-12 hover:text-gray-400' />
					</motion.div>
					<motion.div
						whileTap={{ scale: 1.2 }}
						onClick={nextSlide}
						className='w-14 h-12 flex items-center justify-center hover:cursor-pointer'>
						<MdArrowCircleRight className='w-14 h-12 hover:text-gray-400' />
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Banner
