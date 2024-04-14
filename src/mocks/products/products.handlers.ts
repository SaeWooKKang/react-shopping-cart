import { http, HttpResponse } from 'msw'

import type { ProductList } from '@/routes/-product-list.api'

import products from './products.json'

const allProducts = new Map<number, ProductList[number]>(
  products.map((product) => [product.id, product])
)

export const productsHandlers = [
  http.get('/products', () => {
    return HttpResponse.json(Array.from(allProducts.values()))
  }),
]
