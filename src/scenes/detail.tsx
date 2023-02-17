import React from "react";
import { Link, useParams } from "react-router-dom";
import { AppLayout } from '../layout/app';

export const DetailPage: React.FC = () => {
  const {id} = useParams();

  return (
    <AppLayout>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <Link to="/list">Back to list page</Link>
    </AppLayout>
  );
};
