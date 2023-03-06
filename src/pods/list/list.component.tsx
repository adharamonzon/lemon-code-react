import React from 'react';
import { MemberEntity } from './list.vm';

import ListMui from '@mui/material/List';
import ListItemMui from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { routes } from '../../core/router/routes';
import { useNavigate } from 'react-router-dom';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

interface Props {
  members: MemberEntity[];
}
export const List : React.FC<Props> = (props) => {
  const {members} = props;
  const navigate = useNavigate();

  return (
    <div className='container'>
        <ListMui className="MuiListItem-root">
          {members.map((member) => (
          <ListItemMui key={member.id} alignItems='center' divider>
            <ListItemButton
              role={undefined}
              onClick={() => navigate(routes.details(member.login))}
            >
              <ListItemAvatar>
                <Avatar alt={member.login} src={member.avatarUrl} />
              </ListItemAvatar>  
              <ListItemText
                primary={member.login}
                secondary={<Typography>{member.id}</Typography>}/>
            </ListItemButton>
          </ListItemMui>
          ))}
      </ListMui>
    </div>
  )
}