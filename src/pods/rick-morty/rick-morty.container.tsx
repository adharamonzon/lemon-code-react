import React from 'react';
import { getCharactersFromApi } from './api/rick-morty.api';
import { mapCharactersListToMV } from './rick-morty.mappers';
import { List } from '../list/list.component';
import { Character } from './rick-morty.vm';

export const RickMortyContainer : React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  React.useEffect(() => {
    getCharactersFromApi()
      .then((results) => mapCharactersListToMV(results))
      .then((results) => setCharacters(results))
  }, [])
  return (
    <>
      <p>Rick y morty container</p>
      <ul>
        {characters.map((character) => (
          <p>{character.name}</p>
        ))}
      </ul>
    </>
  )
}