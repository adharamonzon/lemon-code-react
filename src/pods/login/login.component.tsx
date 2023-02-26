import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createEmptyFormData, LoginData } from './login.vm';
import clases from './login.styles.css';
import rickMortyPhoto from '../../assets/rickymorti.png';
import { TextInputComponent } from '../../common/components/input/text-input.component';

interface Props {
  onLogin: (formData: LoginData) => void;
};

export const Login: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [formData, setFormData] = React.useState<LoginData>(
    createEmptyFormData()
  );
  const navigate = useNavigate();
 
  const handleChange = (field: keyof LoginData) => 
    (value:string) => {
      setFormData({
        ...formData,
       [field]: value,
      });
    };
  
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onLogin(formData);
    navigate("/list");
  }

  return (
    <div className={clases.home}>
      <form className={clases.loginContainer} >
        <h4 className={clases.title}>Welcome, login to see more info about Github organizations and users</h4>
        <div>
          <TextInputComponent
            value={formData.username}
            onChange={handleChange('username')}
            placeholder="UserName" 
          />
        </div>
        <div>
        <TextInputComponent
            value={formData.password}
            onChange={handleChange('password')}
            placeholder="Password"
            type="password"
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Login</button> 
      </form>

          <div className='rick-morty-login'>
            <h3>¿Quieres ver los personajes de Rick y Morty?</h3>
            <Link className='img-container' to='/rick-morty'>
              <img className='img' src={rickMortyPhoto} alt="Imagen de Rick y Morty" />
            </Link>
          </div>  
    </div>
  );
};
