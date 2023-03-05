import React from 'react';
import { getCharactersFromApi } from './api/rick-morty.api';
import { mapCharactersListToMV } from './rick-morty.mappers';
import { Character } from './rick-morty.vm';

import clases from './rick-morty.styles.css';
import { RickMortyComponent } from './rick-morty.component';
import { useDebounce } from 'use-debounce';
import { TextInputComponent } from '../../common';

export const RickMortyContainer : React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [searchCharacter, setSearchCharacter] = React.useState<string>('');
  const [debouncedFilter] = useDebounce(searchCharacter, 500);

  React.useEffect(() => {
    getCharactersFromApi(searchCharacter)
      .then((results) => mapCharactersListToMV(results))
      .then((results) => setCharacters(results))
  }, [debouncedFilter]);

  return (
    <main className={clases.main}>
      <h2 className={clases.title}>Rick y morty container</h2>
      <TextInputComponent 
        placeholder='Buscar personaje'
        value={searchCharacter}
        onChange={(e) => setSearchCharacter(e)}
      />
      <RickMortyComponent characters={characters} />
    </main>
  )
}