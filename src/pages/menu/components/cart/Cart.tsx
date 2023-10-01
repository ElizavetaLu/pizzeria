import { useState } from "react"
import { useSelector } from "react-redux"
import CartItemsAmount from "../../../../components/cart-items-amount/CartItemsAmount"
import CartCard from "../../../../components/cards/cart-card/CartCard"
import Flag from "../../../../components/flag/Flag"
import { TPizzaCard } from "../../../../types"
import "./Cart.scss"



export default function Cart() {

  const { isDark } = useSelector((state: any) => state.theme)
  const { data } = useSelector((state: any) => state.cart)

  const [isShown, setIsShown] = useState<boolean>(false)

  const allPrices = data.length && data.map((item: TPizzaCard) => item.qty * item.price)
  const total = data.length && allPrices.reduce((a: number, b: number) => a + b, 0)
 

  return (
    <>
      <button className={`cart-button ${isShown && 'cart-button--move'}`} onClick={() => setIsShown(prev => !prev)}>
        <img className={`cart-button__icon ${isDark && 'cart-button__icon--dark'}`} src="/images/icons/cart.png" alt="" />
        {
          data.length !== 0 && <CartItemsAmount />
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
            data.length === 0
              ? <p className="main-cart__dummy">Nothing for now...</p>
              : data.map((item: any) => {
                return (
                  <CartCard key={item._id} {...item} />
                )
              })
          }
        </div>

        <div>

          <div className="main-cart__total">
            <span className={`main-cart__total-title ${isDark && 'main-cart__total-title--dark'}`}>Total:</span>
            <span className={`main-cart__total-amount ${isDark && 'main-cart__total-amount--dark'}`}>{total}$</span>
          </div>

          <button className={`main-cart__button ${isDark && 'main-cart__button--dark'}`}>to checkout</button>
        </div>
      </div>
    </>
  )
}
