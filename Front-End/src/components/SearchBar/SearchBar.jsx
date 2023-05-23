import { useState } from 'react';
import './SearchBar.modules.css'

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("")

   const hanldeChange = (event) => {
      setId(event.target.value)
      
   }

   return (
      <div className='bar'>
         <input type='search' placeholder='buscar...' className='searchInput' onChange={hanldeChange}/>
         <button onClick={() => onSearch(id)} className='searchButton'>Agregar</button>
      </div>
   );
}
