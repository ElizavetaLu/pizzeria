import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../../store/actions/actionCreatores"
import { TPizzaCard } from "../../../types"
import "./PizzaCard.scss"

export default function PizzaCard(props: TPizzaCard) {

    const { isNew, name, image, ingredients, price } = props

    const { isDark } = useSelector((state: any) => state.theme)
    const dispatch = useDispatch()

    return (
        <div className={`card ${isDark && 'card--dark'}`}>
            {
                isNew && <img className={`card__new ${isDark && 'card__new--dark'}`} src="/images/icons/new.png" alt="" />
            }
            <img className={`card__image ${isDark && 'card__image--dark'}`} src={`/images/pizza/${image}`} alt="" />
            <div className="card__data">

                {/* mobile only row */}
                <div className="card__mobile-row">
                    <img className={`card__image-mobile ${isDark && 'card__image-mobile--dark'}`} src={`/images/pizza/${image}`} alt="" />
                    <p className={`card__name-mobile ${isDark && 'card__name-mobile--dark'}`}>{name}</p>
                </div>


                <p className={`card__name ${isDark && 'card__name--dark'}`}>{name}</p>

                <div className="card__cta-row">
                    <p className={`card__price ${isDark && 'card__price--dark'}`}>{price}$</p>
                    <button className={`card__button ${isDark && 'card__button--dark'}`} onClick={() => dispatch(addToCart(props))}>
                       <img className={`card__add-icon ${isDark && 'card__add-icon--dark'}`} src="/images/icons/plus.png" alt="" title="Add to cart" />
                    </button>
                </div>

                <p className={`card__ingredients ${isDark && 'card__ingredients--dark'}`}>{ingredients.join(', ')}</p>
            </div>
        </div>
    )
}
