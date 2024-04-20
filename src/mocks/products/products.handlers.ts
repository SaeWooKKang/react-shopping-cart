import { delay, http, HttpResponse } from 'msw'

import type { ProductList } from '@/routes/-product-list.api'

import products from './products.json'

const allProducts = new Map<number, ProductList[number]>(
  products.map((product) => [product.id, product])
)

export const productsHandlers = [
  http.get('/products', async () => {
    await delay(1000)

    return HttpResponse.json(Array.from(allProducts.values()))
  }),
  http.get('/products/:id', async ({ params }) => {
    await delay(1000)

    const { id } = params

    return HttpResponse.json(allProducts.get(Number(id)))
  }),
]
