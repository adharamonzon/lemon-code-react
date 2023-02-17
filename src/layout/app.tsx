import React from "react";
import { ProfileContext } from '../core/providers/profile/profile.context';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  const { username } = React.useContext(ProfileContext);
  return (
  <div className="layout-app-container">
    <div className="layout-app-header">{username}</div>
    {children}
  </div>
  );
};