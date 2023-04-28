import { useState } from "react";
import style from './searBar.module.css'

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
      console.log(event.target.value)
   }

   return (
      <div>
         <input 
         placeholder="Search a character"
         className={style.container}
         value={id} 
         type='search' onChange={handleChange}/>
         <button 
         className={style.button}
         onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
