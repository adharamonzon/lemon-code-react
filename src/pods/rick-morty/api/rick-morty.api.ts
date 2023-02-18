import { Character } from "./rick-morty.api.model"

export const getCharactersFromApi = () : Promise<Character[]> => {
  return (fetch('https://rickandmortyapi.com/api/character')
    .then(resp => resp.json())
  ) 
}