import { useSelector } from "react-redux"
import { TNameAndIngredients } from "../../../../../../types"
import "./PizzaCell.scss"

export default function PizzaCell({ name, ingredients, isNew }: TNameAndIngredients) {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className="pizza-smcell">
            {
                isNew && <img className={`pizza-smcell__new ${isDark && 'pizza-smcell__new--dark'}`} src="/images/icons/new.png" alt="" />
            }
            <p className={`pizza-smcell__name ${isDark && 'pizza-smcell__name--dark'}`}>{name}</p>
            <p className={`pizza-smcell__ingredients ${isDark && 'pizza-smcell__ingredients--dark'}`}>{ingredients.join(', ')}</p>
        </div>
    )
}
