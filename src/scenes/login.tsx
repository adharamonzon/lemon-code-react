import React from "react";
import { CenterLayout } from '../layout/center';
import { LoginContainer } from '../pods/login/login.container';

export const LoginPage: React.FC = () => {
  return (
    <CenterLayout>
      <LoginContainer />
    </CenterLayout>
  );
};
