import { useSelector } from "react-redux";
import { TPizzaCard } from "../../../../types"
import "./MenuItem.scss"

export default function MenuItem({ image, name, isNew, ingredients, price, weight }: TPizzaCard) {

    const { isDark } = useSelector((state: any) => state.theme);

    return (
        <div className="menu-item">
            {
                isNew && <img className={`menu-item__new ${isDark && 'menu-item__new--dark'}`} src="/images/icons/new.png" alt="" />
            }

            <div className="menu-item__left">
                <img className={`menu-item__image ${isDark && 'menu-item__image--dark'}`} src={`/images/pizza/${image}`} alt="" />
                <div className="menu-item__data">
                    <div className="menu-item__name">
                        <span className={`menu-item__name-text ${isDark && 'menu-item__name-text--dark'}`}>{name}</span>
                        <div className={`menu-item__dots ${isDark && 'menu-item__dots--dark'}`}></div>
                    </div>
                    <p className={`menu-item__ingredients ${isDark && 'menu-item__ingredients--dark'}`}>{ingredients.join(', ')}</p>
                </div>
            </div>

            <div className="menu-item__right">
                <p className={`menu-item__price ${isDark && 'menu-item__price--dark'}`}>{price}$</p>
                <p className={`menu-item__weight ${isDark && 'menu-item__weight--dark'}`}>{weight}g</p>
                <button className={`menu-item__button ${isDark && 'menu-item__button--dark'}`}>
                    order
                </button>
            </div>
        </div>
    )
}
