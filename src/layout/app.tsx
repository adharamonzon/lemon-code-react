import React from "react";
import { ProfileContext } from '../core/providers/profile/profile.context';

//material
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  const { username } = React.useContext(ProfileContext);
  return (
    <>
    <Box>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            <Link className="link" to="/">My App</Link>
            
          </Typography>
          <Typography variant="h6" component="div">
            user: {username}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    {children}
    </>
  );
};