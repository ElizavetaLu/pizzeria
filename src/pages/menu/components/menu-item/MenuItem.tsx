import { TPizzaCard } from "../../../../types"
import "./MenuItem.scss"

export default function MenuItem({ image, name, ingredients, price, weight }: TPizzaCard) {
    return (
        <div className="menu-item">
            <div className="menu-item__left">
                <img className="menu-item__image" src={`/images/pizza/${image}`} alt="" />
                <div className="menu-item__data">
                    <div className="menu-item__name">
                        <span className="menu-item__name-text">{name}</span>
                        <div className="menu-item__dots"></div>
                    </div>
                    <p className="menu-item__ingredients">{ingredients.join(', ')}</p>
                </div>
            </div>

            <div  className="menu-item__right">
                <p className="menu-item__price">{price}$</p>
                <p className="menu-item__weight">{weight}g</p>
                <button className="menu-item__button">
                    order
                </button>
            </div>
        </div>
    )
}
