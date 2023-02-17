import React from "react";
import { UserProfile, createEmptyUserProfile } from "./profile.vm";
import { LoginPage } from '../../../scenes/login';

interface ProfileContextModel {
  username: string;
  setUserProfile: (userProfile: UserProfile) => void;
}

export const ProfileContext = React.createContext<ProfileContextModel>({
  username: '',
  setUserProfile: () => {},
});

