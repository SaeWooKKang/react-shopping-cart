import { useEffect } from 'react'

import { getCookie, setCookie } from '@/common/hooks/useCookieRepository/service'
import { createStore } from '@/common/module/store/store'
import { useStore } from '@/common/module/store/useStore'
import type { Product } from '@/routes/-product-list.api'

const CARTS_KEY = 'CARTS'

const initializeCookie = getCookie(CARTS_KEY)

interface CartItem extends Pick<Product, 'id'> {
  count: number
}

const cartListStore = createStore<{
  cartList: Array<CartItem>
}>({
  cartList: initializeCookie ? JSON.parse(initializeCookie) : [],
})

export const useCartListStore = () => {
  const [value, setValue] = useStore(cartListStore)

  useEffect(() => {
    setCookie(CARTS_KEY, JSON.stringify(value.cartList), {})
  }, [value])

  const saveProduct = (id: CartItem['id']) => {
    const foundProduct = value.cartList.find((product) => product.id === id)

    foundProduct
      ? setValue((prev) => ({
          ...prev,
          cartList: [
            ...prev.cartList.filter((product) => product.id !== id),
            { id, count: foundProduct.count + 1 },
          ],
        }))
      : setValue((prev) => ({ ...prev, cartList: [...prev.cartList, { id, count: 1 }] }))
  }

  const increaseCount = (id: CartItem['id']) => {
    const MAX_COUNT = 20

    setValue((prev) => ({
      ...prev,
      cartList: prev.cartList.map((product) => {
        return product.id === id
          ? { ...product, count: product.count < MAX_COUNT ? product.count + 1 : MAX_COUNT }
          : product
      }),
    }))
  }

  const decreaseCount = (id: CartItem['id']) => {
    const MIN_COUNT = 1

    setValue((prev) => ({
      ...prev,
      cartList: prev.cartList
        .map((product) => {
          return product.id === id
            ? { ...product, count: product.count > MIN_COUNT ? product.count - 1 : MIN_COUNT }
            : product
        })
        .filter((product) => product.count > 0),
    }))
  }

  const deleteProduct = (id: CartItem['id']) => {
    setValue((prev) => ({
      ...prev,
      cartList: prev.cartList.filter((product) => product.id !== id),
    }))
  }

  return {
    cartList: value.cartList,
    saveProduct,
    increaseCount,
    decreaseCount,
    deleteProduct,
  }
}
