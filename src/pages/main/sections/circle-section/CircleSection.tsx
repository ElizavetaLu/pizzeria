import { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../../../store/actions/actionCreatores"
import { TPizzaCard } from "../../../../types"
import { pizza } from "../../../../data"
import './CircleSection.scss'



export default function CircleSection() {

    const dispatch = useDispatch()

    const { isDark } = useSelector((state: any) => state.theme)

    const [currentPizza, setCurrentPizza] = useState<TPizzaCard>(pizza[11]) 


    // const [current] = useState<string>('1.png')
    // const [next, setNext] = useState<string | null>(null)
    const [countRotation, setCountRotation] = useState<number>(0)

    const selectPizza = (item: TPizzaCard) => {
        //     setCurrentId(id)
        //     setNext(image)
        setCountRotation(prev => prev + 1)
        setCurrentPizza(item)
    }

    return (
        <section className={`circle-section ${isDark && 'circle-section--dark'}`}>

            <div className={`main-circle ${isDark && 'main-circle--dark'}`}>
                {
                    pizza.map((item, i) => {

                        return (
                            <Fragment key={i} >
                                <div
                                    className={`main-circle__dot 
                                    ${isDark && 'main-circle__dot--dark'} 
                                    ${i < 11 && 'main-circle__dot--hidden'}
                                    ${item._id === currentPizza._id && 'main-circle__dot--active'}
                                    `}
                                    onClick={() => selectPizza(item)}
                                >
                                </div>
                                <span
                                    className={`main-circle__dot-item 
                                    ${isDark && 'main-circle__dot-item--dark'} 
                                    ${i < 11 && 'main-circle__dot-item--hidden'}
                                    ${item._id === currentPizza._id && 'main-circle__dot-item--active'}
                                    `}
                                    onClick={() => selectPizza(item)}
                                >{item.name}</span>
                            </Fragment>
                        )
                    })
                }

                <div className={`additional-circle ${isDark && 'additional-circle--dark'}`} >
                    <div className="additional-circle__image-container" style={{ transform: `rotate(${180 * countRotation}deg)` }}>
                        <img
                            className="additional-circle__image"
                            src={`/images/pizza/${currentPizza.image}`}
                            alt=""
                        />
                    </div>

                    {/* <div className="additional-circle__image-container">
                        <img
                            className={`additional-circle__image additional-circle__image--hidden`}
                            src={`/images/pizza/${next}`}
                            alt=""
                        />
                    </div> */}

                </div>

                <div className="main-circle__buttons">
                    <button className="main-circle__button" onClick={() => dispatch(addToCart(currentPizza))}>add to cart</button>
                    <Link to="menu" className="main-circle__button">view all</Link>
                </div>
            </div >
        </section >
    )
}
