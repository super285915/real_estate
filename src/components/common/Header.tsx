import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Home, Menu as MenuIcon, X } from 'lucide-react';
import UserMenuButton from '../navigation/UserMenuButton';

interface HeaderProps {
  isScrolled: boolean;
}

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Properties', path: '/listings' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <AppBar 
      position="sticky" 
      color={isScrolled ? 'primary' : 'transparent'}
      sx={{
        boxShadow: isScrolled ? theme.shadows[3] : 'none',
        bgcolor: isScrolled ? 'primary.main' : 'transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: { xs: 1, md: 0 } }}>
            <Home size={28} color={isScrolled ? "#ffffff" : theme.palette.primary.main} />
            <Typography
              variant="h5"
              component={RouterLink}
              to="/"
              sx={{
                ml: 1,
                fontWeight: 600,
                textDecoration: 'none',
                color: isScrolled ? 'white' : 'primary.main',
              }}
            >
              LuxeEstates
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Stack
              direction="row"
              spacing={3}
              sx={{ 
                flexGrow: 1, 
                justifyContent: 'center',
                ml: 4
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  underline="none"
                  sx={{
                    color: isScrolled ? 'white' : 'text.primary',
                    fontWeight: 500,
                    py: 1,
                    px: 2,
                    borderBottom: isActive(item.path) ? `2px solid ${isScrolled ? 'white' : theme.palette.primary.main}` : '2px solid transparent',
                    '&:hover': {
                      color: isScrolled ? 'rgba(255,255,255,0.8)' : 'primary.main',
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          )}

          {/* User Menu and Mobile Menu Button */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!isMobile && (
              <Button
                variant="contained"
                color="secondary"
                sx={{ mr: 2 }}
              >
                List Property
              </Button>
            )}

            <UserMenuButton />

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 1, color: isScrolled ? 'white' : 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { 
            width: '75%', 
            maxWidth: 300,
            boxSizing: 'border-box',
            bgcolor: 'background.paper',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="primary.main" fontWeight={600}>
            LuxeEstates
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <X size={24} />
          </IconButton>
        </Box>
        
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                onClick={handleDrawerToggle}
                selected={isActive(item.path)}
                sx={{
                  py: 1.5,
                  '&.Mui-selected': {
                    bgcolor: 'primary.light',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.main',
                    },
                  },
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{ 
                    fontWeight: isActive(item.path) ? 600 : 400
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ m: 2 }}
            >
              List Property
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;