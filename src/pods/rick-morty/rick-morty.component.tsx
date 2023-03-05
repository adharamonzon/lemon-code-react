import React from 'react';
import { TextInputComponent } from '../../common';
import { Character } from './rick-morty.vm';
import clases from './rick-morty.styles.css'
import { RickMortyItemComponent } from './rick-morty-item';

interface Props {
  characters: Character[]
};

export const RickMortyComponent : React.FC<Props> = (props) => {
  const {characters} = props;
  const [character, setCharacter] = React.useState<string>('{}')
  return (
    <>
      <h2 className={clases.title}>Rick y morty container</h2>
      <TextInputComponent 
        placeholder='Buscar personaje'
        value={character}
        onChange={(e) => setCharacter(e)}
      />
      <ul className={clases.characterList}>
        {characters.map((character) => (
          <RickMortyItemComponent key={character.id} character={character}/>
        ))}
      </ul>
    </>
  )
}