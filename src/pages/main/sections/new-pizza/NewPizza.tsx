import PizzaCard from '../../../../components/cards/main-pizza-card/PizzaCard';
import { pizza } from '../../../../data';
import SectionTitle from '../../../../components/section-title/SectionTitle';
import './NewPizza.scss'

export default function NewPizza() {

    const newPizzaList = pizza.filter(pizza => pizza.isNew)

    return (
        <section className='new-pizza'>
            <SectionTitle prescription="new tastes" title="NEW pizza" />
            <div className="new-pizza__list">
                {
                    newPizzaList.map(item => {
                        return (
                            <PizzaCard key={item._id} {...item} />
                        )
                    })
                }
            </div>
        </section>
    )
}
