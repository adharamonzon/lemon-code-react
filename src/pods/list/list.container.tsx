import React from 'react';
import { MemberEntity } from './list.vm';
import { List } from './list.component';

export const ListContainer : React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  return (
    <List members={members} />
  );
}