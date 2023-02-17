import React from "react";
import { ProfileProvider } from "./core/providers/profile/profile.provider";
import { RouterComponent } from "./core/router/router.component";

export const App = () => {
  return (
    <ProfileProvider>
      <RouterComponent />
    </ProfileProvider>
  );
};
