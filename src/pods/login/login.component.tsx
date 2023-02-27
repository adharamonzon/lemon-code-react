import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import clases from './login.styles.css';
import rickMortyPhoto from '../../assets/rickymorti.png';
import { TextInputComponent } from '../../common/components/input/text-input.component';
import { ProfileContext } from '../../core/providers';

export const Login: React.FC = () => {

  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { setUserProfile } = React.useContext(ProfileContext);

  const navigate = useNavigate();

  
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUserProfile({username: username});
    if(username === 'admin' && password === 'test') {
      navigate("/list")
    } else {
      alert("User / password incorrect, psst... admin / test");
    }
  }

  return (
    <div className={clases.home}>
      <form className={clases.loginContainer} >
        <h4 className={clases.title}>Welcome, login to see more info about Github organizations and users</h4>
        <div>
          <TextInputComponent
            value={username}
            onChange={(e) => setUserName(e)}
            placeholder="UserName" 
          />
        </div>
        <div>
        <TextInputComponent
            value={password}
            onChange={(e) => setPassword(e)}
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
