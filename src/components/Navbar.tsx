import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  useTheme,
  useMediaQuery,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../contexts/AuthContext';
import { Home, Building2, Info, Mail, User, LogOut, Heart, X } from 'lucide-react';
import { useTheme as useAppTheme } from '../contexts/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const pages = [
  { name: 'Home', path: '/', icon: <Home size={20} /> },
  { name: 'Properties', path: '/listings', icon: <Building2 size={20} /> },
  { name: 'About', path: '/about', icon: <Info size={20} /> },
  { name: 'Contact', path: '/contact', icon: <Mail size={20} /> },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const { themeMode, toggleTheme } = useAppTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, mb: 2 }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            fontWeight: 700,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textDecoration: 'none',
            letterSpacing: '.1rem',
          }}
        >
          REAL ESTATE
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ ml: 'auto', color: theme.palette.text.primary }}
        >
          <X size={24} />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        {pages.map((page) => (
          <ListItem
            key={page.name}
            component={RouterLink}
            to={page.path}
            onClick={handleDrawerToggle}
            selected={location.pathname === page.path}
            sx={{
              mx: 1,
              borderRadius: 2,
              mb: 1,
              color: location.pathname === page.path 
                ? theme.palette.primary.main 
                : theme.palette.text.primary,
              backgroundColor: location.pathname === page.path 
                ? `${theme.palette.primary.main}10` 
                : 'transparent',
              '&:hover': {
                backgroundColor: `${theme.palette.primary.main}08`,
              },
            }}
          >
            <ListItemIcon sx={{ 
              color: location.pathname === page.path 
                ? theme.palette.primary.main 
                : theme.palette.text.secondary,
              minWidth: 40,
            }}>
              {page.icon}
            </ListItemIcon>
            <ListItemText 
              primary={page.name} 
              primaryTypographyProps={{
                fontWeight: location.pathname === page.path ? 600 : 500,
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      {currentUser ? (
        <List>
          <ListItem
            component={RouterLink}
            to="/favorites"
            onClick={handleDrawerToggle}
            sx={{
              mx: 1,
              borderRadius: 2,
              mb: 1,
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: `${theme.palette.primary.main}08`,
              },
            }}
          >
            <ListItemIcon sx={{ color: theme.palette.text.secondary, minWidth: 40 }}>
              <Badge badgeContent={3} color="primary">
                <Heart size={20} />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
          <ListItem
            component={RouterLink}
            to="/profile"
            onClick={handleDrawerToggle}
            sx={{
              mx: 1,
              borderRadius: 2,
              mb: 1,
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: `${theme.palette.primary.main}08`,
              },
            }}
          >
            <ListItemIcon sx={{ color: theme.palette.text.secondary, minWidth: 40 }}>
              <User size={20} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem
            onClick={() => {
              handleDrawerToggle();
              handleLogout();
            }}
            sx={{
              mx: 1,
              borderRadius: 2,
              color: theme.palette.error.main,
              '&:hover': {
                backgroundColor: `${theme.palette.error.main}08`,
              },
            }}
          >
            <ListItemIcon sx={{ color: theme.palette.error.main, minWidth: 40 }}>
              <LogOut size={20} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      ) : (
        <Box sx={{ p: 2 }}>
          <Button
            fullWidth
            component={RouterLink}
            to="/login"
            variant="outlined"
            startIcon={<User size={18} />}
            sx={{ mb: 2 }}
          >
            Login
          </Button>
          <Button
            fullWidth
            component={RouterLink}
            to="/signup"
            variant="contained"
            startIcon={<User size={18} />}
          >
            Sign Up
          </Button>
        </Box>
      )}
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          background: themeMode === 'dark' ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textDecoration: 'none',
                letterSpacing: '.1rem',
              }}
            >
              REAL ESTATE
            </Typography>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                mr: 2, 
                display: { xs: 'flex', md: 'none' },
                color: theme.palette.text.primary,
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo - Mobile */}
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                fontWeight: 700,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textDecoration: 'none',
                letterSpacing: '.1rem',
              }}
            >
              REAL ESTATE
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={RouterLink}
                  to={page.path}
                  startIcon={page.icon}
                  sx={{
                    color: theme.palette.text.primary,
                    '&:hover': {
                      backgroundColor: themeMode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.08)' 
                        : 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* Theme Toggle and User Menu */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton 
                onClick={toggleTheme}
                sx={{
                  color: theme.palette.text.primary,
                  border: `1px solid ${theme.palette.divider}`,
                  '&:hover': {
                    backgroundColor: themeMode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.08)' 
                      : 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>

              {currentUser ? (
                <>
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <Avatar alt={currentUser.email} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                  <Menu
                    anchorEl={anchorElUser}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    sx={{ 
                      '& .MuiPaper-root': {
                        backgroundColor: themeMode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(255, 255, 255)',
                        borderRadius: 2,
                        boxShadow: themeMode === 'dark' 
                          ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
                          : '0 4px 20px rgba(0, 0, 0, 0.1)',
                        border: `1px solid ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                        minWidth: 200,
                        marginTop: 1,
                      },
                      '& .MuiMenuItem-root': {
                        padding: '12px 16px',
                        gap: 2,
                        color: theme.palette.text.primary,
                        '&:hover': {
                          backgroundColor: themeMode === 'dark' 
                            ? 'rgba(255, 255, 255, 0.05)' 
                            : 'rgba(0, 0, 0, 0.04)',
                        },
                      },
                    }}
                  >
                    <MenuItem 
                      onClick={() => {
                        handleCloseUserMenu();
                        navigate('/profile');
                      }}
                      sx={{
                        borderBottom: `1px solid ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                      }}
                    >
                      <User size={18} />
                      <Typography>Profile</Typography>
                    </MenuItem>
                    <MenuItem 
                      onClick={() => {
                        handleCloseUserMenu();
                        handleLogout();
                      }}
                      sx={{
                        color: `${theme.palette.error.main} !important`,
                      }}
                    >
                      <LogOut size={18} />
                      <Typography>Logout</Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    component={RouterLink}
                    to="/login"
                    variant="outlined"
                    startIcon={<User size={18} />}
                    sx={{
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/signup"
                    variant="contained"
                    startIcon={<User size={18} />}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                      }
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            border: 'none',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 