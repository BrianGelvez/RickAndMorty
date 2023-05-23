import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Nav.modules.css'

const Nav = ({ onSearch }) => {
    return (
        <div className='Nav'>

            <Link to='/home'><button className='botones'>Home</button></Link>
            <Link to='/about'><button className='botones'>About</button></Link>
            <SearchBar onSearch={onSearch} />
            <Link to='/favorites'><button className='botones'>Favorites</button></Link>
        </div>
    )
}

export default Nav;
