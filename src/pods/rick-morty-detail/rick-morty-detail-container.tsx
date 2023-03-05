import React, { useEffect, useState } from 'react';
import { Character } from './rick-morty.vm';
import classes from './rick-morty.styles.css';
import back from '../../assets/atras.png';
import { Link } from 'react-router-dom';
interface Props {
  id: string
}
export const RickMortyDetailContainer : React.FC<Props> = (props) => {
  const {id} = props;
  const [character, setCharacter] = useState<Character>({
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: ''
    },
    location: {
      name: '',
      url: ''
    },
    image: '',
    episode: [''],
    url: '',
    created: ''
  });


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(resp => resp.json())
      .then((resp) => setCharacter(resp))
  }, []);

  return (
    <div className={classes.detail}>
      <div className={classes.headerContainer}>
        <Link className={classes.btn} title="go back" to={"/rick-morty"}><img src={back} alt="go back" /></Link>
        <h2 className={classes.title}>Detail Page</h2>
      </div>
      <div className={classes.infoContainer}>
        <ul className={classes.characterList}>
          <li className={classes.characterListItem}><span className={classes.highligth}>Name: </span>{character.name}</li>
          <li className={classes.characterListItem}><span className={classes.highligth}>Origin: </span>{character.origin.name}</li>
          <li className={classes.characterListItem}><span className={classes.highligth}>Specie: </span>{character.species}</li>
          <li className={classes.characterListItem}><span className={classes.highligth}>Status: </span>{character.status}</li>
        </ul>
        <div>
          <img className={classes.characterImg} src={character.image} alt={character.name} />
        </div>
      </div>
    </div>
  )
}