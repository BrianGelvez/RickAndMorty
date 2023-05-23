import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Detail.modules.css'

export const Detail = () => {

  const { detailId } = useParams();

  const [character, setcharacter] = useState({})


  useEffect(() => {
    // const API_KEY = '1de4d3f9898f.14b961fccd5be4db6d13'

    axios(`http://localhost:3001/rickandmorty/character/${detailId}`)
      .then((response) => setcharacter(response.data))
  }, [detailId])



  return (
    <div className='detail2'>
      <div className='detail1'>
        {character.name ? (
          <>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.type}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin?.name}</h2>
            <img src={character.image} alt="Cargando..." />
          </>
        ) : (
          <h3>Loading...</h3>
        )
        }
      </div>
    </div>
  )
}


