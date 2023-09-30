import { useSelector } from "react-redux"
import { TPizzaCard } from "../../../../../../types"
import PizzaCell from "../pizza-cell/PizzaCell"
import "./Table.scss"

export default function Table({ data }: { data: TPizzaCard[] }) {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <table className={`small-table ${isDark && 'small-table--dark'}`}>
            <thead className="small-table__head">
                <tr className="small-table__head-row">
                    <th></th>
                    <th className={`small-table__head-cell  ${isDark && 'small-table__head-cell--dark'}`}>price</th>
                    <th className="small-table__head-cell"></th>
                </tr>
            </thead>
            <tbody className="small-table__body">
                {
                    data.map(item => {
                        return (
                            <tr key={item._id} className="small-table__body-row">
                                <td className="small-table__body-cell">
                                    <PizzaCell name={item.name} ingredients={item.ingredients} isNew={item.isNew}/>
                                </td>
                                <td className={`small-table__body-cell small-table__body-cell--price ${isDark && 'small-table__body-cell--dark'}`}>{item.price}$</td>
                                <td className="small-table__body-cell small-table__body-cell--add">
                                    <button className="small-table__button">
                                        <img className={`small-table__add-icon ${isDark && 'small-table__add-icon--dark'}`} src="/images/icons/plus.png" alt="" title="Add To Cart"/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
