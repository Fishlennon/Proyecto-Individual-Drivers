import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getDriverById, getDrivers } from '../../redux/actions';

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
         dispatch(getDriverById(query));
      }
      else  {
         const idInteger = Number.isInteger(Number(query))
         if (idInteger) {
            dispatch(getDriverById(query));
         } else {
            dispatch(getDrivers(query));
         }
      }
      }

   return (
      <div>
         <input type='search' onChange={handleChange} value={query}/>
         <button onClick={Search}>Buscar</button>
         
      </div>
   );
}
export default SearchBar