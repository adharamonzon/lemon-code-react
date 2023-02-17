import React from 'react';
import { Link } from 'react-router-dom';
import { MemberEntity } from './list.vm';

export const ListContainer : React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  return (
    <>
      <h2>Hello from List page</h2>+{" "}
      
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
}