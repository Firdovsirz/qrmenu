import "./SearchSection.scss";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function SearchSection() {
    return (
        <section className='search-section'>
            <div className="search-container">
                <div>
                    <SearchIcon />
                    <p>Axtar</p>
                </div>
                <div>
                    <ArrowDropDownIcon />
                </div>
            </div>
        </section>
    )
}
