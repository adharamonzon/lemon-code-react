import React from 'react';
import { MemberEntity } from './list.vm';
import { ListItem } from './list-item.component';

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
      </div>
  )
}