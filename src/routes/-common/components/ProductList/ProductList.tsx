import './index.css'

import { useQuery } from '@tanstack/react-query'

import { RenderPropsList } from '@/common/components/RenderPropsList/RenderPropsList'
import { Skeleton } from '@/common/components/Skeleton/Skeleton'
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
            className="product-container2"
            list={data || []}
            renderItem={(props) => <ProductCard {...props} />}
          />
        ),
        loading: (
          <RenderPropsList
            list={Array.from({ length: 6 }, (_, i) => ({
              id: i,
            }))}
            renderItem={() => <Skeleton />}
            className=" product-container2"
          />
        ),
        error: <>error</>,
      }}
    />
  )
}
