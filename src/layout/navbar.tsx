import React from "react";
import { ProfileContext } from '../core/providers/profile/profile.context';

interface Props {
  children: React.ReactNode;
}

export const NavbarLayout : React.FC<Props> = ({children}) => {
  const {username} = React.useContext(ProfileContext);
  return (
    <div>
      <header>{username}</header>
      <main>{children}</main>
    </div>
  )
}