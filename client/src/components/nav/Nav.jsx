import {Link, useLocation } from "react-router-dom"
import SearchBar from "../searchBar/SearchBar";
import './Nav.styles.css';


const Nav = ()=> {
    const location = useLocation()

    if(location.pathname === '/') return null

    return(
        <div className="nav">
            <SearchBar/>
            
            <Link to='/' className=''>
                <button className=''>landing</button>
            </Link>
            <Link to='/form' className=''>
                <button className=''>Crear Driver</button>
            </Link>
        </div>
    )
}

export default Nav