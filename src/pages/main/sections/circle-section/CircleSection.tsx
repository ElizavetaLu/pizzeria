import { useState } from "react"
import './CircleSection.scss'


const test = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2]


export default function CircleSection() {

    const [current, setCurrent] = useState<number>(1)
    const [next, setNext] = useState<number | null>(null)
    const [countRotation, setCountRotation] = useState<number>(0)

    const selectPizza = (item: number) => {
        setNext(item)
        // setTimeout(() => {
        //   setCurrent(item)
        // }, 600)
        setCountRotation(prev => prev + 1)
    }

    return (
        <section className="circle-section">
            <div className="main-circle">
                {
                    test.map((item, i) => {

                        return (
                            < >
                                <div className={`main-circle__dot ${i < 11 && 'main-circle__dot--hidden'}`} onClick={() => selectPizza(item)}>
                                </div>
                                <span className={`main-circle__dot-item ${i < 11 && 'main-circle__dot-item--hidden'}`} onClick={() => selectPizza(item)}>Some name, {i}</span>
                            </>
                        )
                    })
                }

                <div className="additional-circle" style={{ transform: `rotate(${180 * countRotation}deg)` }}>
                    <img
                        className="additional-circle__image"
                        src={`/images/pizza-select/pizza-${current}.png`}
                        alt=""
                    />
                    <img
                        className={`additional-circle__image additional-circle__image--hidden`}
                        src={`/images/pizza-select/pizza-${next}.png`}
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}
