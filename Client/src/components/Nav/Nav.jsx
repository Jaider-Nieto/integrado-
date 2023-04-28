import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom"
import style from './nav.module.css'

const Nav = (props) => {
    return(
        <div className={style.contain} >
            
            <button className={style.button} >
                <NavLink className={style.link} to='/about' >  About  </NavLink>
            </button>
            <button className={style.button} >
                <NavLink className={style.link} to='/home' >  Home  </NavLink>
            </button>
            <button className={style.button} >
                <NavLink className={style.link} to='/favorites'> Favorites </NavLink>
            </button>

            <SearchBar className={style.search} onSearch={props.onSearch}/>


        </div>
    ) 
}

export default Nav