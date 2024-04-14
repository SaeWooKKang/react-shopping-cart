import { useQuery } from '@tanstack/react-query'

import { RenderPropsList } from '@/common/components/RenderPropsList/RenderPropsList'
import { SwitchCase } from '@/common/components/SwitchCase/SwitchCase'
import { parseApiStatus } from '@/common/utils/parseApiStatus'
import type { ProductList as ProductsListType } from '@/routes/-product-list.api'
import { getProductList } from '@/routes/-product-list.api'

import { ProductCard } from '../ProductCard/ProductCard'

/**
 * @summary 상품목록 컴포넌트
 */
export const ProductList = () => {
  const { data, isLoading, isError } = useQuery<ProductsListType>({
    queryKey: ['/posts'],
    queryFn: getProductList,
  })

  return (
    <SwitchCase
      value={parseApiStatus({ isLoading, isError })}
      cases={{
        success: (
          <RenderPropsList
            list={data!}
            renderItem={(props) => <ProductCard {...props} />}
            className="product-container"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
          />
        ),
        loading: <>loading...</>,
        error: <>error</>,
      }}
    />
  )
}
