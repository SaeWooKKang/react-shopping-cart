import { useQuery } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'

import type { ProductList } from './-product-list.api'
import { getProductList } from './-product-list.api'

export const Route = createLazyFileRoute('/')({
  component: Home,
})

function Home() {
  const { data, isLoading } = useQuery<ProductList>({
    queryKey: ['/posts'],
    queryFn: getProductList,
  })

  if (isLoading) {
    return <>loading...</>
  }

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
