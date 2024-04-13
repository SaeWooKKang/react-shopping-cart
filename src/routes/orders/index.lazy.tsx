import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/orders/')({
  component: Orders,
})

/**
 * @summary 주문목록 페이지
 */
function Orders() {
  return <div>Hello /orders/!</div>
}
