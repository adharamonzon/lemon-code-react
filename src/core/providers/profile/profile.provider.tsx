import React from "react";
import { UserProfile, createEmptyUserProfile } from "./profile.vm";
import { LoginPage } from '../../../scenes/login';
import { ProfileContext } from "./profile.context";

interface Props {
  children: React.ReactNode;
}

export const ProfileProvider: React.FC<Props> = ({ children }) => {
  const [profile, setProfile] = React.useState<UserProfile>();

  return (
    <ProfileContext.Provider
      value={{ username: profile?.username, setUserProfile: setProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};