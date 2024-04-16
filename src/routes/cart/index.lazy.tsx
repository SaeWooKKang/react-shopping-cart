import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cart/')({
  component: Cart,
})

/**
 * @summary 장바구니 페이지
 */
function Cart() {
  return <div>Hello /cart/!</div>
}
