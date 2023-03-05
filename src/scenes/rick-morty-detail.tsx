import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from '../layout/app';
import { DetailContainer } from "../pods/detail";
import { RickMortyDetailContainer } from '../pods/rick-morty-detail/rick-morty-detail-container';

export const RickMortyDetail: React.FC = () => {
  const {id} = useParams();

  return (
    <AppLayout>
      <RickMortyDetailContainer id={id} />
    </AppLayout>
  );
};
