import axios from "axios" 
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from './detail.module.css'


const Detail = () => {
    
    const [character, setCharacter] = useState({})

    const { id } = useParams()
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);

    return(
        <div className={style.contain}>
            <img 
            className={style.image}
            src={character ? character.image : ''} alt="" />
            <h2
            className={style.letter}
            >Name:{character.name ? ` ${character.name}` : ''} </h2>
            <h2
            className={style.letter}
            >Status:{character ? ` ${character.status}` : ''} </h2>
            <h2
            className={style.letter}
            >Specie:{character ? ` ${character.species}` : ''} </h2>
            <h2
            className={style.letter}
            >Gender:{character ? ` ${character.gender}` : ''} </h2>
        </div>
    )
}

export default Detail 