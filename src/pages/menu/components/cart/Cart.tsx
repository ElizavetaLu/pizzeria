import { useState } from "react"
import Flag from "../../../../components/flag/Flag"
import "./Cart.scss"

const test: any = []

export default function Cart() {

  const [isShown, setIsShown] = useState<boolean>(false)
  const [isCartEmpty] = useState<boolean>(test.length === 0)

  return (
    <>
      <button className={`cart-button ${isShown && 'cart-button--move'}`} onClick={() => setIsShown(prev => !prev)}>
        <img className="cart-button__icon" src="/images/icons/cart.png" alt="" />
        {
          !isCartEmpty && <div className="cart-button__circle">{test.length}</div>
        }
      </button>

      <div className={`main-cart ${!isShown && 'main-cart--hidden'}`}>

        <button className="main-cart__hide-button" onClick={() => setIsShown(prev => !prev)}>
          <img className="main-cart__hide-icon" src="/images/icons/arrow.png" alt="" />
        </button>

        <h4 className="main-cart__title">What would you like to eat?</h4>
        <Flag />

        <div className="main-cart__list">
          {
            isCartEmpty
              ? <p className="main-cart__dummy">Nothing for now...</p>
              : test.map((item: any) => {
                return (
                  <div key={item}></div>
                )
              })
          }
        </div>

        <button className="main-cart__button">to checkout</button>
      </div>
    </>
  )
}
