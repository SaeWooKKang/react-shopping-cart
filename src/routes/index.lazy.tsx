import { createLazyFileRoute } from '@tanstack/react-router'

import { ProductList } from './-common/components/ProductList/ProductList'

export const Route = createLazyFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <ProductList />
    </>
  )
}
