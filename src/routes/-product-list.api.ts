import { convertQueryToString } from '@/common/utils/convertQueryToString'

export interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
}

type Meta = {
  next_page?: number
}

type PageQuery = {
  page?: number
  perCount?: number
}

export type ProductListResponse = {
  list: Array<Product>
  meta: Meta
}

type ProductListParams = PageQuery

/**
 * @summary 상목목록 API
 */
export const getProductList = async (query: ProductListParams): Promise<ProductListResponse> => {
  const response = await fetch(`/products` + `?${convertQueryToString(query)}`)

  if (!response.ok) {
    throw new Error('failed to getProductList')
  }

  return response.json()
}
