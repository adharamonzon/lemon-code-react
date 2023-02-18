import React from 'react';
import { MemberEntity } from './list.vm';
import { ListItem } from './list-item.component';
import { Link } from 'react-router-dom';

import rickMortyPhoto from '../../assets/rickymorti.png';

interface Props {
  members: MemberEntity[];
}
export const List : React.FC<Props> = (props) => {
  const {members} = props;
  
  return (
    <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
        <ListItem member={member} />
        ))}
      <div className='rick-morty-login'>
        <h3>¿Quieres ver los personajes de Rick y Morty?</h3>
        <Link className='img-container' to='/rick-morty'>
          <img className='img' src={rickMortyPhoto} alt="Imagen de Rick y Morty" />
        </Link>
      </div>
    </div>
  )
}