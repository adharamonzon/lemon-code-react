import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { switchRoutes } from "./routes";
import { ListPage } from "../../scenes/list";
import { DetailPage } from "../../scenes/detail";
import { RickMortyPage } from '../../scenes/rick-morty';
import { LoginPage } from '../../scenes/login';
import { RickMortyDetail } from '../../scenes/rick-morty-detail';

export const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginPage/>}/>
        <Route path={switchRoutes.list} element={<ListPage />} />
        <Route path={switchRoutes.details} element={<DetailPage />} />
        <Route path={switchRoutes.rickMorty} element={<RickMortyPage />}/>
        <Route path={switchRoutes.rickMortyDetail} element={<RickMortyDetail />}/>
      </Routes>
    </BrowserRouter>
  );
};