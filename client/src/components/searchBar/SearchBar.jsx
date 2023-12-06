import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { filterTeams, getDriverById, getDrivers, getDriversByName, resetFiltered } from '../../redux/actions';
import './SearchBar.styles.css';

const SearchBar = () => {
   const dispatch = useDispatch();
   const [query, setQuery] = useState('')

   const handleChange = (event) => {
      setQuery(event.target.value)

   }

   const isValidUUID = (uuid) => {
      const uuidRegex =
         /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      return uuidRegex.test(uuid);
   };

   const Search =  () => {
      
         onSearch(query);
         
         setQuery('')
         

      
   }
   
   const onSearch= (query)=> {
      const esUuid = isValidUUID(query)
      if(esUuid) {
         // dispatch(resetFiltered());
         dispatch(getDriverById(query));
      }
      else  {
         const idInteger = Number.isInteger(Number(query))
         if (idInteger) {
            // dispatch(resetFiltered());
            dispatch(getDriverById(query));
         } else {
            dispatch(getDriversByName(query));
            // dispatch(filterTeams(query.toLowerCase()));
         }
      }
      }

   return (
      <div className='searchBar-containter'>
         <input type='search' onChange={handleChange} value={query} placeholder='Ingrese nombre o id' className='search-input'/>
         <button onClick={Search} className='button'>Buscar</button>
         
      </div>
   );
}
export default SearchBar