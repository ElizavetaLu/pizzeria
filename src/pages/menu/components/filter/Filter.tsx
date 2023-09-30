import { useState } from "react"
import { useSelector } from "react-redux"
import Checkbox from "../checkbox/Checkbox"
import Range from "../price-range/Range"
import "./Filter.scss"


const ingredientsTest = ['Mozzarella di bufala', 'Organic tomato sauce', 'garlic', 'oregano', 'olive oil', 'Mozzarella fior di latte', 'basil', 'capers', 'anchovies', 'mushrooms', 'cooked ham', 'artichokes']


export default function Filter({ isShown, setIsShown }: { isShown: boolean, setIsShown: any }) {

    const { isDark } = useSelector((state: any) => state.theme)


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
        <div className={`filter ${!isShown && 'filter--hidden'} ${isDark && 'filter--dark'}`}>

            <button className="filter__close" onClick={() => setIsShown((prev: boolean) => !prev)}>
                <img className={`filter__close-icon ${isDark && 'filter__close-icon--dark'}`} src="/images/icons/plus.png" alt="" />
            </button>

            <div>
                <h4 className={`filter__title ${isDark && 'filter__title--dark'}`}>Filter:</h4>
                <div className="filter__parameters">
                    <div className="filter__ingredients">
                        <span className={`filter__parameter ${isDark && 'filter__parameter--dark'}`}>Ingredients:</span>
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
                        <span className={`filter__parameter ${isDark && 'filter__parameter--dark'}`}>Price:</span>
                        <Range />
                    </div>
                </div>
            </div>

            <div className="filter__button-container">
                <button className={`filter__button ${isDark && 'filter__button--dark'}`}>Apply filter</button>
            </div>
        </div>
    )
}
