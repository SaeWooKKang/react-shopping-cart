import type { ProductList } from '@/routes/-product-list.api'

type ProductCardProps = ProductList[number]

export const ProductCard = (props: ProductCardProps) => {
  return (
    <>
      <img src={props.imageUrl} alt={props.name} />
      <div className="flex justify-between p-5">
        <div className="product-info">
          <span className="product-info__name">{props.name}</span>
          <span className="product-info__price">{props.price.toLocaleString()}</span>
        </div>
        <img src={'/src/assets/svgs/cart.svg'} alt="장바구니" />
      </div>
    </>
  )
}
