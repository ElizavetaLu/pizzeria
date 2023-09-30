import { useState } from "react"
import { useSelector } from "react-redux"
import Flag from "../../../../components/flag/Flag"
import CartCard from "../../../../components/cards/cart-card/CartCard"
import "./Cart.scss"

const test: any = [1,2,3,4,5]


export default function Cart() {

  const { isDark } = useSelector((state: any) => state.theme)

  const [isShown, setIsShown] = useState<boolean>(false)
  const [isCartEmpty] = useState<boolean>(test.length === 0)

  return (
    <>
      <button className={`cart-button ${isShown && 'cart-button--move'}`} onClick={() => setIsShown(prev => !prev)}>
        <img className={`cart-button__icon ${isDark && 'cart-button__icon--dark'}`} src="/images/icons/cart.png" alt="" />
        {
          !isCartEmpty && <div className="cart-button__circle">{test.length}</div>
        }
      </button>

      <div className={`main-cart ${isShown || 'main-cart--hidden'} ${isDark && 'main-cart--dark'}`}>

        <button className="main-cart__hide-button" onClick={() => setIsShown(prev => !prev)}>
          <img className={`main-cart__hide-icon ${isDark && 'main-cart__hide-icon--dark'}`} src="/images/icons/arrow.png" alt="" />
        </button>

        <h4 className={`main-cart__title ${isDark && 'main-cart__title--dark'}`}>What would you like to eat?</h4>
        <Flag />

        <div className="main-cart__list">
          {
            isCartEmpty
              ? <p className="main-cart__dummy">Nothing for now...</p>
              : test.map((item: any) => {
                return (
                  <CartCard key={item} />
                )
              })
          }
        </div>

        <button className={`main-cart__button ${isDark && 'main-cart__button--dark'}`}>to checkout</button>
      </div>
    </>
  )
}
