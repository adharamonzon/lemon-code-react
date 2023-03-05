import { Character } from "./rick-morty.api.model"

export const getCharactersFromApi = (character:string) : Promise<Character[]> => {
  return (fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
    .then(resp => resp.json())
    .then(resp => resp.results)
  ) 
}

