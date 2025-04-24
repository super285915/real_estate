import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';

const UserMenu: React.FC = () => {
  return (
    <Paper 
      elevation={2}
      sx={{
        width: 200,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <List disablePadding>
        <ListItem 
          component={RouterLink} 
          to="/login"
          sx={{
            py: 1.5,
            textDecoration: 'none',
            color: 'text.primary',
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }}
        >
          <ListItemText>
            <Typography variant="body2">Login</Typography>
          </ListItemText>
        </ListItem>

        {/* <ListItem 
          component={RouterLink} 
          to="/signup"
          sx={{
            py: 1.5,
            textDecoration: 'none',
            color: 'text.primary',
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }}
        >
          <ListItemText>
            <Typography variant="body2">Sign Up</Typography>
          </ListItemText>
        </ListItem> */}

        <ListItem 
          component={RouterLink} 
          to="/favorites"
          sx={{
            py: 1.5,
            textDecoration: 'none',
            color: 'text.primary',
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }}
        >
          <ListItemText>
            <Typography variant="body2">My Favorites</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
};

export default UserMenu; 