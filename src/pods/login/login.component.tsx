import React from 'react';

import { createEmptyFormData, LoginData } from './login.vm';

interface Props {
  onLogin: (formData: LoginData) => void;
};

export const Login: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [formData, setFormData] = React.useState<LoginData>(
    createEmptyFormData()
  );
 
  const handleChange = (field: keyof LoginData) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
       [field]: e.target.value,
      });
    };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="login-container">
      <input
        placeholder="Username"
        value={formData.username}
        onChange={handleChange('username')}
      />
      <input
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={handleChange('password')}
      />
      <button type="submit">login</button>
    </div>
  </form>
  );
};
