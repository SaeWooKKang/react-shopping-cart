import { Link } from '@tanstack/react-router'

/**
 * @summary 공통으로 사용하는 네비게이션 바
 * @detail 메인페이지, 장바구니, 주문목록 페이지 라우팅
 */
export const Gnb = () => (
  <div>
    <nav className="nav flex justify-around">
      <div className="flex-center">
        <Link to="/" className="nav-title pointer">
          Foo Shop
        </Link>
      </div>

      <div className="flex gap-15">
        <Link to="/cart" className="nav-button flex items-center pointer">
          장바구니
        </Link>
        <Link to="/orders" className="nav-button flex items-center pointer">
          주문목록
        </Link>
      </div>
    </nav>
  </div>
)
