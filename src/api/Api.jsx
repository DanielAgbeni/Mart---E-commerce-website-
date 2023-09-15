/** @format */

import axios from 'axios'

export async function productData() {
	const product = await axios.get(
		'https://fakestoreapiserver.reactbd.com/products'
	)
	return product
}
