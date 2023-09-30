import { useState } from "react"
import { useSelector } from "react-redux"
import "./CartCard.scss"

export default function CartCard() {

    const { isDark } = useSelector((state: any) => state.theme)

    const [value, setValue] = useState<string>('1')

    return (
        <div className={`cart-card ${isDark && 'cart-card--dark'}`}>
            <img className="cart-card__image" src="/images/pizza/pizza.png" alt="" />
            <img className={`cart-card__delete ${isDark && 'cart-card__delete--dark'}`} src="/images/icons/plus.png" alt="" />

            <div>
                <p className={`cart-card__name ${isDark && 'cart-card__name--dark'}`}>Margherita di bufala</p>

                <div className="cart-card__info">
                    <span className={`cart-card__price ${isDark && 'cart-card__price--dark'}`}>18$</span>

                    <div className="cart-card__amount">
                        <button className="cart-card__button">
                            <img className={`cart-card__button-icon ${isDark && 'cart-card__button-icon--dark'}`} src="/images/icons/minus.png" alt="" />
                        </button>
                        <input
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            className={`cart-card__count ${isDark && 'cart-card__count--dark'}`}
                            type="number"
                        />
                        <button className="cart-card__button">
                            <img className={`cart-card__button-icon ${isDark && 'cart-card__button-icon--dark'}`} src="/images/icons/plus.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
