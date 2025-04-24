import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { User } from 'lucide-react';
import { useTheme } from '@mui/material/styles';

interface UserMenuProps {
  isScrolled: boolean;
}

const UserMenu: React.FC<UserMenuProps> = ({ isScrolled }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Tooltip title="Account">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          sx={{ 
            color: isScrolled ? 'white' : 'primary.main',
            '&:hover': {
              bgcolor: isScrolled ? 'rgba(255,255,255,0.1)' : 'rgba(10,36,99,0.05)',
            } 
          }}
        >
          <User size={24} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            width: 200,
            overflow: 'visible',
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography variant="body2">Login</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="body2">Sign Up</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="body2">My Favorites</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;