/** @format */

import React from 'react'
import google from '../assets/google.png'

const Signin = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
			<div className='w-full flex items-center justify-center gap-10 '>
				<div className='border-solid border-[2px] flex items-center justify-center py-3 px-3  hover:border-black cursor-pointer gap-3 rounded-md'>
					<img className='w-8' src={google} alt='' />
					<p className='text-grey-500 hover:text-black'>Sign in with google</p>
				</div>
				<button className='bg-black text-white text-base py-3 px-8 trackin-wide rounded-md hover:bg-gray-500 duration-300'>
					Sign out
				</button>
			</div>
		</div>
	)
}

export default Signin
