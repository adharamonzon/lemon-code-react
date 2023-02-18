import React from 'react';
import { AppLayout } from '../layout';
import { RickMortyContainer } from '../pods/rick-morty/rick-morty.container';

export const RickMortyPage : React.FC = () => {

  return (
    <AppLayout>
      <RickMortyContainer/>
    </AppLayout>
  );
}