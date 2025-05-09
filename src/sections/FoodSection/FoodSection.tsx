import "./FoodSection.scss";
import Cola from "../../assets/cola.webp";
import Burger from "../../assets/burger.webp";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function FoodSection() {
    const arr = [
        {
            image: Burger,
            name: 'Burger',
            desc: 'Şirəli qızardılmış mal əti kotleti, təzə kahı, yetişmiş pomidor.',
            price: 20
        }, {
            image: Cola,
            name: 'Kola',
            desc: 'Sərin',
            price: 5
        }, {
            image: Burger,
            name: 'Burger',
            desc: 'Şirəli qızardılmış mal əti kotleti, təzə kahı, yetişmiş pomidor.',
            price: 20
        }, {
            image: Cola,
            name: 'Kola',
            desc: 'Sərin',
            price: 5
        }
    ];
    return (
        <section className="food-section">
            <div className="food-parent-container">
                {arr.map((food, index) => {
                    return (
                        <div key={index} className="food-container">
                            <div className="food-text-container">
                                <h3>{food.name}</h3>
                                <p>{food.desc}</p>
                                <p>{food.price} AZN</p>
                                <button>
                                    <ShoppingCartIcon style={{marginRight: 10}}/>
                                    Səbət
                                </button>
                            </div>
                            <div className="food-img-container">
                                <img src={food.image} alt={food.name} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
