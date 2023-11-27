import {Link, useLocation } from "react-router-dom"



const Nav = ()=> {
    return(
        <div>
            <Link to='/home' className=''>
                <button className=''>Home</button>
            </Link>
            <Link to='/' className=''>
                <button className=''>landing</button>
            </Link>
        </div>
    )
}

export default Nav