import React from 'react';
import { Character } from './rick-morty.vm';
import clases from './rick-morty.styles.css'
import { RickMortyItemComponent } from './rick-morty-item';

interface Props {
  characters: Character[]
};

export const RickMortyComponent : React.FC<Props> = (props) => {
  const {characters} = props;

  return (
    <>
      <ul className={clases.characterList}>
        {characters.map((character) => (
          <RickMortyItemComponent key={character.id} character={character}/>
        ))}
      </ul>
    </>
  )
}