import { delay, http, HttpResponse } from 'msw'

import type { ProductListResponse } from '@/routes/-product-list.api'

import { PAGE_META } from '../const'
import products from './products.json'

const allProducts = new Map<number, ProductListResponse['list'][number]>(
  products.map((product) => [product.id, product])
)

export const productsHandlers = [
  http.get('/products', async ({ request }) => {
    await delay(500)

    const url = new URL(request.url)

    const page = parseInt(url.searchParams.get('page') ?? PAGE_META.DEFAULT_PAGE)
    const perCount = parseInt(url.searchParams.get('perCount') ?? PAGE_META.DEFAULT_PER_COUNT)

    const start = page * perCount
    const end = start + perCount

    const maxPage = Math.ceil(allProducts.size / perCount)
    const nextPage = page < maxPage ? page + 1 : undefined

    return HttpResponse.json({
      list: Array.from(allProducts.values()).slice(start, end),
      meta: { next_page: nextPage },
    })
  }),
  http.get('/products/:id', async ({ params }) => {
    await delay(1000)

    const { id } = params

    return HttpResponse.json(allProducts.get(Number(id)))
  }),
]
