import React from 'react';
import { getCharactersFromApi } from './api/rick-morty.api';
import { mapCharactersListToMV } from './rick-morty.mappers';
import { Character } from './rick-morty.vm';
import { RickMortyItemComponent } from './rick-morty-item';

import clases from './rick-morty.styles.css'
import { TextInputComponent } from '../../common/components/input/text-input.component';
import { useDebounce } from 'use-debounce';

export const RickMortyContainer : React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [character, setCharacter] = React.useState<string>('');
  const [debouncedFilter] = useDebounce(character, 500);

  React.useEffect(() => {
    getCharactersFromApi()
      .then((results) => mapCharactersListToMV(results))
      .then((results) => setCharacters(results))
  }, [characters])

  return (
    <main className={clases.main}>
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
    </main>
  )
}