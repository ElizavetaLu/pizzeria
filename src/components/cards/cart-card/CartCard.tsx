 import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../../../store/actions/actionCreatores"
import { TPizzaCard } from "../../../types"
import "./CartCard.scss"

export default function CartCard(props: TPizzaCard) {

    const { name, image, price, weight, qty } = props

    const dispatch = useDispatch()
    const { isDark } = useSelector((state: any) => state.theme) 


    return (
        <div className={`cart-card ${isDark && 'cart-card--dark'}`}>
            <img className="cart-card__image" src={`/images/pizza/${image}`} alt="" />

            <img
                onClick={() => dispatch(removeFromCart({item: props, removeAll: true}))}
                className={`cart-card__delete ${isDark && 'cart-card__delete--dark'}`}
                src="/images/icons/plus.png"
                alt=""
                title="Remove from cart"
            />

            <div>
                <p className={`cart-card__name ${isDark && 'cart-card__name--dark'}`}>{name}</p>

                <div className="cart-card__info">
                    <div className="cart-card__product-data">
                        <span className={`cart-card__price ${isDark && 'cart-card__price--dark'}`}>{price * qty}$</span>
                        <span className={`cart-card__weight ${isDark && 'cart-card__weight--dark'}`}>{weight}g</span>
                    </div>

                    <div className="cart-card__amount">
                        <button
                            className="cart-card__button"
                            onClick={() => {
                                if (qty === 1) return
                                dispatch(removeFromCart({item:props}))
                            }}
                        >
                            <img
                                className={`cart-card__button-icon ${isDark && 'cart-card__button-icon--dark'}`}
                                src="/images/icons/minus.png"
                                alt=""
                                title="Remove one"
                            />
                        </button>
                        <input
                            value={qty}
                            onChange={e => { }}
                            className={`cart-card__count ${isDark && 'cart-card__count--dark'}`}
                            type="number"
                            disabled
                        />
                        <button
                            className="cart-card__button"
                            onClick={() => dispatch(addToCart(props))}
                        >
                            <img
                                className={`cart-card__button-icon ${isDark && 'cart-card__button-icon--dark'}`}
                                src="/images/icons/plus.png"
                                alt=""
                                title="Add one more"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
