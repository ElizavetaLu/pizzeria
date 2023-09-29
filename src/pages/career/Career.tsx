import { useRef } from "react"
import Position from "./components/position/Position"
import Form from "./components/form/Form" 
import "./Career.scss"

export default function Career() {

    const toForm = useRef<HTMLFormElement>()

    return (
        <>
            <main className="career">
                <section className="career__data">
                    <h1 className="career__title">
                        The dream job<span className="career__title-thin"> you've been searching for</span>
                    </h1>
                    <div className="career__data-info">
                        <p className="career__data-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo iusto eligendi ratione obcaecati est laudantium dicta! Quidem inventore nihil, repudiandae commodi accusantium cum ratione, eveniet perferendis quasi mollitia asperiores!</p>
                        <button className="career__data-button">find your job</button>
                    </div>
                </section>
                <section className="career__positions">
                    <Position title="Pizzaiolo" image="pizzamaker.jpg" scroll={toForm} />
                    <Position title="Barman" image="barman.jpg" scroll={toForm} />
                    <Position title="Courier" image="delivery.png" scroll={toForm} />
                    <Position title="Waiter" image="waiter.jpeg" scroll={toForm} />
                </section>
            </main>
            <section className="career__form-container">
                <div className="career__dark-bg"></div>
                <Form toForm={toForm} />
            </section>
        </>
    )
}
