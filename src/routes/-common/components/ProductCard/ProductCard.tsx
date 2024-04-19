import type { ProductList } from '@/routes/-product-list.api'

import { useCartListStore } from '../../store/cartListStore'

type ProductCardProps = ProductList[number]

export const ProductCard = (props: ProductCardProps) => {
  const cartListStore = useCartListStore()

  return (
    <>
      <img src={props.imageUrl} alt={props.name} />

      <div className="flex justify-between p-5">
        <div className="product-info">
          <span className="product-info__name">{props.name}</span>
          <span className="product-info__price">{props.price.toLocaleString()}</span>
        </div>

        <button className="pointer" onClick={() => cartListStore.saveProduct(props.id)}>
          <img src={'/src/assets/svgs/cart.svg'} alt="장바구니" />
        </button>
      </div>
    </>
  )
}
