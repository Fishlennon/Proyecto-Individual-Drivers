import { useState } from 'react';

const SearchBar = ({onSearch}) => {

   const [name, setName] = useState('')

   const handleChange = (event) => {
      setName(event.target.value)

   }
   const Search = () => {
      onSearch(name)
      setName('')
   }
   
   return (
      <div>
         <input type='search' onChange={handleChange} value={name}/>
         <button onClick={Search}>Buscar</button>
         
      </div>
   );
}
export default SearchBar