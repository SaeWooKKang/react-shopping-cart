interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
}

export type ProductList = Array<Product>

/**
 * @summary 상목목록 API
 */
export const getProductList = async () => {
  const response = await fetch('/products')

  if (!response.ok) {
    throw new Error('failed to getProductList')
  }

  return response.json()
}
