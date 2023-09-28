import { useState } from "react"
import Checkbox from "../checkbox/Checkbox"
import "./Filter.scss"
import Range from "../price-range/Range"


const ingredientsTest = ['Mozzarella di bufala', 'Organic tomato sauce', 'garlic', 'oregano', 'olive oil', 'Mozzarella fior di latte', 'basil', 'capers', 'anchovies', 'mushrooms', 'cooked ham', 'artichokes']


export default function Filter({ isShown, setIsShown }: { isShown: boolean, setIsShown: any }) {

    const [filterIngredients, setFilterIngredients] = useState<string[]>([])

    const changeFilterIngredients = (ingredient: string) => {
        const isExist = filterIngredients.includes(ingredient)

        if (isExist) {
            setFilterIngredients(prev => prev.filter(item => item !== ingredient))
        } else {
            setFilterIngredients(prev => [...prev, ingredient])
        }
    }


    return (
        <div className={`filter ${isShown && 'filter--hidden'}`}>

            <button className="filter__close" onClick={() => setIsShown((prev: boolean) => !prev)}>
                <img className="filter__close-icon" src="/images/icons/plus.png" alt="" />
            </button>

            <div>
                <h4 className="filter__title">Filter:</h4>
                <div className="filter__parameters">
                    <div className="filter__ingredients">
                        <span className="filter__parameter">Ingredients:</span>
                        <ul className="filter__ingredients-list">
                            {
                                ingredientsTest.map(item => {
                                    return (
                                        <li key={item} className="filter__ingredient">
                                            <Checkbox item={item} onChange={changeFilterIngredients} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="filter__price">
                        <span className="filter__parameter">Price:</span>

                        <Range />

                    </div>
                </div>
            </div>

            <div className="filter__button-container">
                <button className="filter__button">Apply filter</button>
            </div>
        </div>
    )
}
