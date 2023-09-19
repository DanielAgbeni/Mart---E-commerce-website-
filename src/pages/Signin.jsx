/** @format */

import React from 'react'
import google from '../assets/google.png'
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
} from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser, removerUser } from '../redux/martSlice'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const auth = getAuth()
	const provider = new GoogleAuthProvider()
	const handleGoogleLogin = (e) => {
		// e.preventDefault();
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user
				dispatch(
					addUser({
						id: user.uid,
						name: user.displayName,
						email: user.email,
						image: user.photoURL,
					})
				)
				setTimeout(() => {
					navigate('/')
				}, 1500)
				console.log(user)
				toast.success('Sign-in successful.')
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message
				const credential = GoogleAuthProvider.credentialFromError(error)
				toast.error('An error occured')
				console.log(error)
				// console.log(user)
				// ...
			})
	}
	const handleSignOut = () => {
		const auth = getAuth()
		localStorage.clear()

		signOut(auth)
			.then(() => {
				dispatch(removerUser())
				toast.success('Sign-out successful.')
			})
			.catch((error) => {
				console.log(error)
				toast.error('An error happened.')
			})
	}
	return (
		<div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
			<div className='w-full flex items-center justify-center gap-10 '>
				<div
					onClick={handleGoogleLogin}
					className='border-solid border-[2px] flex items-center justify-center py-3 px-3  hover:border-black cursor-pointer gap-3 rounded-md'>
					<img className='w-8' src={google} alt='' />
					<p className='text-grey-500 hover:text-black'>Sign in with google</p>
				</div>
				<button
					onClick={handleSignOut}
					className='bg-black text-white text-base py-3 px-8 trackin-wide rounded-md hover:bg-gray-500 duration-300'>
					Sign out
				</button>
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

export default Signin
