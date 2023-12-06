import {Link, useLocation } from "react-router-dom"
import SearchBar from "../searchBar/SearchBar";
import './Nav.styles.css';


const Nav = ()=> {
    const location = useLocation()

    if(location.pathname === '/') return null

    return(
        <div className="nav">
            <SearchBar/ >
            
            <Link to='/' className=''>
                <button className='button'>Inicio</button>
            </Link>
            <Link to='/home' className=''>
                <button className='button'>Home</button>
            </Link>
            <Link to='/gallery' className=''>
                <button className='button'>Gallery</button>
            </Link>
            <Link to='/form' className=''>
                <button className='button'>Crear Driver</button>
            </Link>
            <Link to='/delete' className=''>
                <button className='button'>Eliminar driver BD</button>
            </Link>
        </div>
    )
}

export default Nav