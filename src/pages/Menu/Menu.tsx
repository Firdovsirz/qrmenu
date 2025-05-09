import Header from '../../components/Header/Header';
import FoodSection from '../../sections/FoodSection/FoodSection';
import SearchSection from '../../sections/Search/SearchSection';
import SliderSection from '../../sections/SliderSection/SliderSection';
import SloganSection from '../../sections/Slogan/SloganSection';

export default function Menu() {
    return (
        <>
            <Header />
            <main>
                <SloganSection />
                <SearchSection />
                <SliderSection />
                <FoodSection />
            </main>
        </>
    )
}
