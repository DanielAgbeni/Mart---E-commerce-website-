/** @format */

import axios from 'axios'

export async function productData() {
	try {
		const product = await axios.get(
			'https://fakestoreapiserver.reactbd.com/products'
		)
		return product
	} catch (err) {
		product = 'Network Disconnected'
	}

	return product
}
