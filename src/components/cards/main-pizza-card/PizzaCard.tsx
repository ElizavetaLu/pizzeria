import { useSelector } from "react-redux"
import { TPizzaCard } from "../../../types"
import "./PizzaCard.scss"

export default function PizzaCard({ _id, isNew, name, image, ingredients, price }: TPizzaCard) {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className={`card ${isDark && 'card--dark'}`}>
            {
                isNew && <img className={`card__new ${isDark && 'card__new--dark'}`} src="/images/icons/new.png" alt="" />
            }
            <img className={`card__image ${isDark && 'card__image--dark'}`} src={`/images/pizza/${image}`} alt="" />
            <div className="card__data">
                <div className="card__name-row">

                    {/* mobile only row */}
                    <div className="card__mobile-row">
                        <img className={`card__image-mobile ${isDark && 'card__image-mobile--dark'}`} src={`/images/pizza/${image}`} alt="" />
                        <p className={`card__name-mobile ${isDark && 'card__name-mobile--dark'}`}>{name}</p>
                    </div>

                    <p className={`card__name ${isDark && 'card__name--dark'}`}>{name}</p>
                    <button className={`card__add ${isDark && 'card__add--dark'}`}>
                        <img className={`card__add-icon ${isDark && 'card__add-icon--dark'}`} src="/images/icons/plus.png" alt="" />
                    </button>

                </div>
                <div className="card__last-row">
                    <p className={`card__price ${isDark && 'card__price--dark'}`}>{price}$</p>
                    <div className={`card__ingredients ${isDark && 'card__ingredients--dark'}`}>{ingredients.join(', ')}</div>
                </div>
            </div>
        </div>
    )
}
