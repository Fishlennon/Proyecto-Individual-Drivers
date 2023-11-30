import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { filterOrigin, filterTeams, getDrivers, orderDrivers } from '../../redux/actions';

import Cards from '../../components/cards/Cards';
import Nav from '../../components/nav/Nav';

import './Home.styles.css';

const Home = ()=> {

const dispatch = useDispatch();
const filtered = useSelector((state)=>state.filtered)
const allDrivers = useSelector((state)=>state.allDrivers)

const [Page, setPage] = useState(1);
const perPage = 9;
const startDr = (Page - 1) * perPage;
const endDr= startDr + perPage;
const nineDrivers = filtered.slice(startDr, endDr);

const [team, setTeam] = useState('')

useEffect(()=>{
    dispatch(getDrivers());
},[dispatch])

const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(allDrivers.length/9)));
}
const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
}

const handleFilter = (event) => {
    setPage(1);
    dispatch(filterOrigin(event.target.value))
}
const handleFilterTeams = () => {
    setPage(1);
    // if (team.trim() === "") {
        
    //    return;
    //   }
    dispatch(filterTeams(team))
    setTeam('')
  };
  
  const handleChange = (event) => {
    setTeam(event.target.value.toLowerCase())

 }

 const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleFilterTeams();
    }
  };


const handleOrder = (event) => {
    dispatch(orderDrivers(event.target.value))
}

    return(
        <div className='home'>
            <select name="Order" id="Order"  onChange={handleOrder}>
                <option value="NA">Nombre ↑ </option>
                <option value="ND">Nombre ↓</option>
                <option value="FNA">Fecha nacimiento ↑</option>
                <option value="FND">Fecha nacimiento ↓</option>
            </select>
            <select name="Filter" id="Filter" onChange={handleFilter}>
                <option value="ALL">ALL</option>
                <option value="API">API</option>
                <option value="DB">DB</option>
            </select>

            <input type='search' placeholder='Buscar Team'  value={team} onChange={handleChange} onKeyPress={handleEnter}/>
            <button onClick={handleFilterTeams}>Buscar</button >
          
            {filtered.length > 0 
            ?(<Cards filtered={nineDrivers}/>) 
            : (<p>No se encontraron conductores.</p>)}

            <button onClick={handlePrevPage} disabled={Page === 1}>
                 Anterior
            </button>
            <span>Página actual: {Page}</span>
            <button onClick={handleNextPage} disabled={Page === Math.ceil(filtered.length/9)}>
                Siguiente
            </button>
        </div>
    )
}

export default Home