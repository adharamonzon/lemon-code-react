import React from 'react';

import { ProfileContext } from '../../core/providers';
import { Login } from './login.component';
import { LoginData } from './login.vm';

export const LoginContainer: React.FC = () => { 
  const { setUserProfile } = React.useContext(ProfileContext);

  const handleLogin = (formData: LoginData) => {
    if(formData.username === 'admin' && formData.password === 'test') {
     setUserProfile({username: formData.username});
    } else {
     alert("User / password incorrect, psst... admin / test")
    }
  };

  return (
    <Login onLogin={handleLogin}/>
  );
};
