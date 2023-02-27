import React from 'react';
import { MemberEntity } from './list.vm';
import { List } from './list.component';
import { getMemberList } from './api/list.api';
import { mapMemberListToMv } from './list.mappers';
import { TextInputComponent } from '../../common';

export const ListContainer : React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState<string>('lemoncode');
  
  React.useEffect(() => {
      getMemberList(organization)
      .then((results) => mapMemberListToMv(results))
      .then((results) => setMembers(results));
  }, [organization]);

  const handleChange = (value:  string):void => {
    setOrganization(value)    
  }

  return (
    <>
      <TextInputComponent
              value={organization}
              onChange={() => setOrganization(organization)}
              placeholder="Buscar organización..." 
      />
      <List members={members} />
    </>
  );
}