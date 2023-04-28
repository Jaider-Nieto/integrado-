import style from "./card.module.css";
import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.contain}>
            <div className={style.btnContain}>
               
               <button 
               onClick={handleFavorite}
               className={style.fav}
               >{isFav ? '❤️' : '🤍' }</button>
               
               <button 
               className={style.button}
               onClick={() => onClose(id)}
               >X</button>
            </div>

               <NavLink 
                  to={`/detail/${id}`} 
                  className={style.link}>

                  <h2 className={style.name}>{name}</h2>

               </NavLink>

            <img 
             className={style.image}
             src={image} alt={name} />
         


         <div className={style.back} >

            <div className={style.containDetail} >
               <h2>Id: {id}</h2>
               <h2>Specie: {species}</h2>
               <h2>Gender: {gender}</h2>
            </div>

         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);