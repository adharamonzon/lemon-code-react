import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { switchRoutes } from "./routes";
import { ListPage } from "../../scenes/list";
import { DetailPage } from "../../scenes/detail";
import { RickMortyPage } from '../../scenes/rick-morty';

export const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.rickMorty} element={<RickMortyPage />}/>
        <Route path={switchRoutes.list} element={<ListPage />} />
        <Route path={switchRoutes.details} element={<DetailPage />} />
        <Route path={switchRoutes.root} element={<Navigate to={switchRoutes.list} />} />
      </Routes>
    </BrowserRouter>
  );
};