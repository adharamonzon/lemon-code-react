import React from "react";
import { AppLayout } from '../layout/app';
import { ListContainer } from "../pods/list";

export const ListPage: React.FC = () => {
  return (
    <AppLayout>
      <ListContainer/>
    </AppLayout>
  );
};
