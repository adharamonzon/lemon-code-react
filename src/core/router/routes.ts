import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  details: string;
  rickMorty: string;
  rickMortyDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  details: "/detail/:id",
  rickMorty: "/rick-morty",
  rickMortyDetail: "/rick-morty-detail/:id",
};

export const routes = {
  ...switchRoutes,
  details: (id: string) => generatePath(switchRoutes.details, { id }),
  rickMortyDetail: (id: string) => generatePath(switchRoutes.rickMortyDetail, {id})
};