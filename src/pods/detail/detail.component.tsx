import React from "react";
import { Link } from "react-router-dom";
import { MemberDetailEntity } from "./detail.vm";
import classes from './detail.styles.css';

import  Card from "@mui/material/Card";
import  CardHeader from "@mui/material/CardHeader";
import  CardContent from "@mui/material/CardContent";

interface Props {
  member: MemberDetailEntity;
}
export const DetailComponent:  React.FC<Props> = (props) => {
  const {member} = props;

  return (
    <Card className="MuiCard-root">
      <CardHeader>
        <h3>User Id: {member.id}</h3>
      </CardHeader>
      <CardContent>
      <h2>Detail Page</h2>
      <p> login: {member.login}</p>
      <img src={member.avatar_url} />
      <p> name: {member.name}</p>
      <p> company: {member.company}</p>
      <p> bio: {member.bio}</p>
      <Link to="/list">Back to list page</Link>
      </CardContent>
    </Card>
  );
};
