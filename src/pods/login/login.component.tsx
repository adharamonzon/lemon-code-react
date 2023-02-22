import React from 'react';
import clases from './login.styles.css';
import { createEmptyFormData, LoginData } from './login.vm';
import { LoginContainer } from './login.container';
import { Link } from 'react-router-dom';

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
    <div >
      <form className={clases.LoginContainer} onSubmit={handleSubmit}>
        <h4>Welcome, login to see more info about Github organizations and users</h4>
        <div>
          <input
            placeholder="Username"
            value={formData.username}
            onChange={handleChange('username')}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange('password')}
          />
          <button type="submit">login</button> 
          {/* <Link to="/rick-morty">rick y morty</Link>  */}      
        </div>
      </form>
    </div>
  );
};
