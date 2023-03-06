import React from 'react';
import { Character } from './rick-morty.vm';
import clases from './rick-morty.styles.css'
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
interface Props {
  character : Character
}
export const RickMortyItemComponent : React.FC<Props> = (props) => {
  const {character} = props;
  return (
    <li className={clases.listItem} key={character.id}>
      <h3 className={clases.name}>{character.name}</h3>
      <div className={clases.content}>
        <div className={clases.imgContainer}>
          <img className={clases.img} src={character.img} alt='Character image' />
        </div>
        <ul className={clases.characteristics}>
          <li className={clases.characteristic}>Epecies: {character.species}</li>  
          <li className={clases.characteristic}>{character.status}</li>
          <Link className={clases.link} to={`/rick-morty-detail/${character.id}`} >
            <Button  variant="outlined" type="button">Saber más</Button> 
          </Link>
        </ul>
      </div>
    </li>
  )
}