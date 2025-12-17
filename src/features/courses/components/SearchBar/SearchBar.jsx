import './SearchBar.css'
import Search from '../../../../assets/icons/search.svg'

export function SearchBar({ handleSearchChange }) {
    return (
        <div className="search" id='searching'>
            <img src={Search} alt="search" />
            <input
                type="search"
                placeholder="Izlash"
                onChange={(e) => handleSearchChange(e.target.value)}
            />
        </div>
    );
}
