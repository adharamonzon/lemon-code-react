import React from 'react';
import { MemberEntity } from './list.vm';
import { List } from './list.component';
import { getMemberList } from './api/list.api';
import { mapMemberListToMv } from './list.mappers';
import { TextInputComponent } from '../../common';
import { useDebounce } from 'use-debounce';

export const ListContainer : React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState<string>('lemoncode');
  const [debouncedFilter] = useDebounce(organization, 500);
  
  React.useEffect(() => {
      getMemberList(organization)
      .then((results) => mapMemberListToMv(results))
      .then((results) => setMembers(results));
  }, [debouncedFilter]);

  return (
    <>
    <div className='input'>
      <TextInputComponent
              value={organization}
              onChange={(e) => setOrganization(e)}
              placeholder="Buscar organización..." 
              label='Search organization:'
      />
    </div>
      <List members={members} />
    </>
  );
}