import { createLazyFileRoute } from '@tanstack/react-router'

import { ProductList } from './-common/components/ProductRenderPropsList/ProductRenderPropsList'

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
