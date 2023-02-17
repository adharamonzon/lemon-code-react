import React from "react";
import { Link } from "react-router-dom";
import { MemberDetailEntity } from "./detail.vm";

interface Props {
  member: MemberDetailEntity;
}
export const DetailComponent:  React.FC<Props> = (props) => {
  const {member} = props;

  return (
    <>
      <h2>Detail Page</h2>
      <h3>User Id: {member.id}</h3>
      <p> login: {member.login}</p>
      <img src={member.avatar_url} />
      <p> name: {member.name}</p>
      <p> company: {member.company}</p>
      <p> bio: {member.bio}</p>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
