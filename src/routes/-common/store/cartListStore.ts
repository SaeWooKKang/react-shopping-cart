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

  return {
    cartList: value.cartList,
    saveProduct,
  }
}
