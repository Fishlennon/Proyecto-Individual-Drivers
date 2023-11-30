import {Link } from "react-router-dom"

const Landing = ()=> {
    return(
        <div>
            <h1>landing</h1>
            <img src="https://previews.123rf.com/images/ssuaphoto/ssuaphoto1202/ssuaphoto120200009/12156980-coche-de-f%C3%B3rmula-uno-con-el-camino-aislado-sobre-fondo-blanco.jpg" alt="" />
            <Link to='/home' className=''>
                <button className=''>INGRESAR</button>
            </Link>
        </div>
    )
}

export default Landing