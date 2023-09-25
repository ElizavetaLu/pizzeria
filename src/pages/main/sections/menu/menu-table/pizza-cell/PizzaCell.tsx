import { useSelector } from "react-redux"
import "./PizzaCell.scss"

export default function PizzaCell({ name, ingredients }: { name: string, ingredients: string[] }) {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className="pizza-smcell">
            <p className={`pizza-smcell__name ${isDark && 'pizza-smcell__name--dark'}`}>{name}</p>
            <p className={`pizza-smcell__ingredients ${isDark && 'pizza-smcell__ingredients--dark'}`}>{ingredients.join(', ')}</p>
        </div>
    )
}
