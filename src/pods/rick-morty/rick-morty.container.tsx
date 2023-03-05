import React from 'react';
import { getCharactersFromApi } from './api/rick-morty.api';
import { mapCharactersListToMV } from './rick-morty.mappers';
import { Character } from './rick-morty.vm';

import clases from './rick-morty.styles.css';
import { RickMortyComponent } from './rick-morty.component';

export const RickMortyContainer : React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  React.useEffect(() => {
    getCharactersFromApi()
      .then((results) => mapCharactersListToMV(results))
      .then((results) => setCharacters(results))
  }, [characters]);

  return (
    <main className={clases.main}>
      <RickMortyComponent characters={characters} />
    </main>
  )
}