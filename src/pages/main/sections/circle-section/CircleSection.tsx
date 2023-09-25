import { Fragment, useState } from "react"
import { useSelector } from "react-redux"
import './CircleSection.scss'
import SelectSize from "../../components/select-size/SelectSize"


const test = [
    {
        _id: 0,
        name: 'Pepperoni',
        image: 'pizza-3'
    },
    {
        _id: 1,
        name: 'Pepperoni',
        image: 'pizza-3'
    },
    {
        _id: 2,
        name: 'Pepperoni',
        image: 'pizza-3'
    },
    {
        _id: 3,
        name: 'Pepperoni',
        image: 'pizza-3'
    },
    {
        _id: 4,
        name: 'Pepperoni',
        image: 'pizza-3'
    },
    {
        _id: 5,
        name: 'Pepperoni',
        image: 'pizza-3'
    },
    {
        _id: 6,
        name: 'Pepperoni',
        image: 'pizza-3'
    },
    {
        _id: 7,
        name: 'Pepperoni',
        image: 'pizza-3'
    },
    {
        _id: 8,
        name: 'Pepperoni',
        image: 'pizza-3'
    },
    {
        _id: 9,
        name: 'Pepperoni',
        image: 'pizza-3'
    },
    {
        _id: 10,
        name: 'Veggie',
        image: 'pizza-1'
    },
    {
        _id: 11,
        name: 'Pepperoni',
        image: 'pizza-3'
    },
    {
        _id: 12,
        name: 'Meat',
        image: 'pizza-2'
    },
    {
        _id: 13,
        name: 'Margherita',
        image: 'pizza-1'
    },
    {
        _id: 14,
        name: 'BBQ Chicken',
        image: 'pizza-3'
    },
    {
        _id: 15,
        name: 'Hawaiian',
        image: 'pizza-2'
    },
    {
        _id: 16,
        name: 'Buffalo',
        image: 'pizza-3'
    },
    {
        _id: 17,
        name: 'Supreme',
        image: 'pizza-1'
    },
    {
        _id: 18,
        name: 'The Works',
        image: 'pizza-2'
    },
    {
        _id: 19,
        name: 'Cheese',
        image: 'pizza-3'
    },
]

export default function CircleSection() {

    const { isDark } = useSelector((state: any) => state.theme)
    // const isDark = true

    const [currentId, setCurrentId] = useState<number>(11)

    const [current] = useState<string>('pizza-3')
    const [next, setNext] = useState<string | null>(null)
    const [countRotation, setCountRotation] = useState<number>(0)

    const selectPizza = (id: number, image: string) => {
        setCurrentId(id)
        setNext(image)
        setCountRotation(prev => prev + 1)
    }

    return (
        <section className={`circle-section ${isDark && 'circle-section--dark'}`}>

            <SelectSize />

            <div className={`main-circle ${isDark && 'main-circle--dark'}`}>
                {
                    test.map((item, i) => {

                        return (
                            <Fragment key={i} >
                                <div
                                    className={`main-circle__dot 
                                    ${isDark && 'main-circle__dot--dark'} 
                                    ${i < 11 && 'main-circle__dot--hidden'}
                                    ${item._id === currentId && 'main-circle__dot--active'}
                                    `}
                                    onClick={() => selectPizza(item._id, item.image)}
                                >
                                </div>
                                <span
                                    className={`main-circle__dot-item 
                                    ${isDark && 'main-circle__dot-item--dark'} 
                                    ${i < 11 && 'main-circle__dot-item--hidden'}
                                    ${item._id === currentId && 'main-circle__dot-item--active'}
                                    `}
                                    onClick={() => selectPizza(item._id, item.image)}
                                >{item.name}</span>
                            </Fragment>
                        )
                    })
                }

                <div className={`additional-circle ${isDark && 'additional-circle--dark'}`} style={{ transform: `rotate(${180 * countRotation}deg)` }}>
                    <img
                        className="additional-circle__image"
                        src={`/images/pizza-select/${current}.png`}
                        alt=""
                    />
                    <img
                        className={`additional-circle__image additional-circle__image--hidden`}
                        src={`/images/pizza-select/${next}.png`}
                        alt=""
                    />

                </div>
                    <button className="main-circle__button">order now</button>
            </div >
        </section >
    )
}
