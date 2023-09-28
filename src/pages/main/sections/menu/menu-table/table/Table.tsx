import { TPizzaCard } from "../../../../../../types"
import PizzaCell from "../pizza-cell/PizzaCell"
import "./Table.scss"

export default function Table({ data }: { data: TPizzaCard[] }) {
    return (
        <table className="small-table">
            <thead className="small-table__head">
                <tr className="small-table__head-row">
                    <th></th>
                    <th className="small-table__head-cell">price</th>
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
                                <td className="small-table__body-cell small-table__body-cell--price">{item.price}$</td>
                                <td className="small-table__body-cell small-table__body-cell--add">
                                    <button className="small-table__button">
                                        <img className="small-table__add-icon" src="/images/icons/plus.png" alt="" title="Add To Cart"/>
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
