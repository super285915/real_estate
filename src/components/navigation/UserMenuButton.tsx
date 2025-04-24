import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Popover,
} from '@mui/material';
import { User } from 'lucide-react';
import UserMenu from './UserMenu';

const UserMenuButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        size="large"
        sx={{
          color: 'inherit',
        }}
      >
        <User size={24} />
      </IconButton>
      
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          mt: 1,
        }}
      >
        <UserMenu />
      </Popover>
    </Box>
  );
};

export default UserMenuButton; 