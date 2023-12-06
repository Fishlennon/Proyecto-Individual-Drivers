import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { filterOrigin, filterTeams, getDrivers, getTeams, orderDrivers } from '../../redux/actions';

import Cards from '../../components/cards/Cards';
import Nav from '../../components/nav/Nav';

import './Home.styles.css';

const Home = ()=> {

const dispatch = useDispatch();
const allDrivers = useSelector((state)=>state.allDrivers)
const filtered = useSelector((state)=>state.filtered)


const [Page, setPage] = useState(1);
const perPage = 9;
const startSlice = (Page - 1) * perPage;
const endSlice= startSlice + perPage;
const nineDrivers = filtered.slice(startSlice, endSlice);
const [team, setTeam] = useState('')

// useEffect(()=>{
//     dispatch(getDrivers());
// },[])
useEffect(() => {
    if (!allDrivers.length) {
        dispatch(getDrivers());
    }
}, [dispatch, allDrivers]);

const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(allDrivers.length/9)));
}
const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
}

const handleChange = (event) => {
  setTeam(event.target.value.toLowerCase())

}
const handleFilter = (event) => {
    setPage(1);
    dispatch(filterOrigin(event.target.value))
}
const handleFilterTeams = () => {
    setPage(1);
    dispatch(filterTeams(team))
    setTeam('')
  };
  

  const handleOrder = (event) => {
     setPage(1);
     dispatch(orderDrivers(event.target.value))
    }

    const handleEnter = (event) => {
       if (event.key === 'Enter') {
           handleFilterTeams();
        }
    };
    
    return(
        <div className='home'> 
            <select className='select' name="Order" id="Order"  onChange={handleOrder}>
                <option value="NA">Nombre ↑ </option>
                <option value="ND">Nombre ↓</option>
                <option value="FNA">Fecha nacimiento ↑</option>
                <option value="FND">Fecha nacimiento ↓</option>
            </select>
            <select className='select' name="Filter" id="Filter" onChange={handleFilter}>
                <option value="ALL">ALL</option>
                <option value="API">API</option>
                <option value="DB">DB</option>
            </select>
            {/* <select name="teams" id="teams" >
                <option value="MERCEDES">MERCEDES</option>
                <option value="PEUGEOT">PEUGEOT</option>
                <option value="SAUBER">SAUBER</option>
            </select> */}

            <input className='input-home' type='search' placeholder='Ingrese Team'  value={team} onChange={handleChange} onKeyPress={handleEnter}/>
            <button className='button-home' onClick={handleFilterTeams}>Filtrar</button >
          
            {/* {filtered.length > 0 
            ?(<Cards filtered={nineDrivers}/>) 
            : (<p>No se encontraron conductores.</p>)} */}
            <Cards filtered={nineDrivers}/>

            <button className='button-home' onClick={handlePrevPage} disabled={Page === 1}>
                 Anterior
            </button>
            <span className='span'>Pagina {Page}</span>
            <button className='button-home' onClick={handleNextPage} disabled={Page === Math.ceil(filtered.length/9)}>
                Siguiente
            </button>
        </div>
    )
}

export default Home