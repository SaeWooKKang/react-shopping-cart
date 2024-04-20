import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

import { SwitchCase } from '@/common/components/SwitchCase/SwitchCase'
import { parseApiStatus } from '@/common/utils/parseApiStatus'
import { useCartListStore } from '@/routes/-common/store/cartListStore'

import { Product } from './-common/components/Product/Product'
import type { Product as ProductResponse } from './-product-item.api'
import { getProduct } from './-product-item.api'

export const Route = createFileRoute('/products/$id/')({
  parseParams: (params) => ({ id: Number(params.id) }),
  component: ProductDetail,
})

function ProductDetail() {
  const { id } = Route.useParams()

  const { data, isLoading, isError } = useQuery<ProductResponse>({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
  })

  const { saveProduct } = useCartListStore()

  return (
    <SwitchCase
      value={parseApiStatus({ isLoading, isError })}
      cases={{
        success: data ? <Product {...data} saveProduct={saveProduct} /> : null,
        loading: <div>loading...</div>,
        error: <div>error</div>,
      }}
    />
  )
}
