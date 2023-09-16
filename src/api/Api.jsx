/** @format */

import axios from 'axios'
import { shop } from './data'

export async function productData() {
	try {
		const product = shop
		return product
	} catch (err) {
		product = 'Network Disconnected'
	}

	return product
}
