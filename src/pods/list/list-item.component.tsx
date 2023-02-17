import React from 'react';
import { Link } from 'react-router-dom';
import { MemberEntity } from './list.vm';

interface Props {
  member: MemberEntity;
}
export const ListItem : React.FC<Props> = (props) => {
  const {member} = props;
  
  return (
    <>
      <img src={member.avatar_url} />
      <span>{member.id}</span>
      <Link to={`/detail/${member.login}`}>{member.login}</Link>
    </>
  )
}