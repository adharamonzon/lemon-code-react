import React from 'react';
import { MemberEntity } from './list.vm';
import { List } from './list.component';
import { getMemberList } from './api/list.api';
import { mapMemberListToMv } from './list.mappers';

export const ListContainer : React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
      getMemberList()
      .then((results) => mapMemberListToMv(results))
      .then((results) => setMembers(results));
  }, []);

  return (
    <List members={members} />
  );
}