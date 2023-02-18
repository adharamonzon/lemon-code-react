import * as am from './api/rick-morty.api.model';
import * as vm from './rick-morty.vm';

export const mapCharactersListToMV = (list: am.Character[]) : vm.Character[] => {
  return list.map(mapCharacterToVM)
};

const mapCharacterToVM = (item: am.Character) : vm.Character => ({
  id: item.id,
  name: item.name,
  status: item.status,
  species: item.species,
  originName: item.origin.name,
  img: item.image,
  url: item.url
})