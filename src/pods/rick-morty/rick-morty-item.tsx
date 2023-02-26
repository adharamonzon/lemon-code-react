import React from 'react';
import { Character } from './rick-morty.vm';
import clases from './rick-morty.styles.css'
 
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
          <li className={clases.characteristic}>Especie: {character.species}</li> 
          <li className={clases.characteristic}>Origen: {character.originName}</li> 
          <li className={clases.characteristic}>{character.status}</li>
        </ul>
      </div>
    </li>
  )
}