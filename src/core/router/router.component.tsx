import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../../scenes/login";
import { switchRoutes } from "./routes";
import { ListPage } from "../../scenes/list";
import { DetailPage } from "../../scenes/detail";

export const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginPage />} />
        <Route path={switchRoutes.list} element={<ListPage />} />
        <Route path={switchRoutes.details} element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};