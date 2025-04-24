import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Home,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Properties', path: '/listings' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ];

  const propertyTypes = [
    { label: 'Houses', path: '/listings?type=house' },
    { label: 'Apartments', path: '/listings?type=apartment' },
    { label: 'Villas', path: '/listings?type=villa' },
    { label: 'Commercial', path: '/listings?type=commercial' },
    { label: 'Offices', path: '/listings?type=office' },
    { label: 'Rentals', path: '/listings?type=rental' },
  ];

  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Home size={28} color="#ffffff" />
              <Typography variant="h5" component="div" sx={{ ml: 1, fontWeight: 600 }}>
                LuxeEstates
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
              Discover your dream home with LuxeEstates. We connect buyers and sellers for the perfect real estate match.
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ mb: 3 }}>
              <IconButton size="small" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Facebook size={18} />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Instagram size={18} />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Twitter size={18} />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Linkedin size={18} />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.path}
                  underline="hover"
                  sx={{ 
                    color: 'white', 
                    opacity: 0.8,
                    '&:hover': { opacity: 1 },
                    transition: 'opacity 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Property Types */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 600 }}>
              Property Types
            </Typography>
            <Stack spacing={1}>
              {propertyTypes.map((type) => (
                <Link
                  key={type.label}
                  component={RouterLink}
                  to={type.path}
                  underline="hover"
                  sx={{ 
                    color: 'white', 
                    opacity: 0.8,
                    '&:hover': { opacity: 1 },
                    transition: 'opacity 0.2s',
                  }}
                >
                  {type.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info & Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 600 }}>
              Contact & Newsletter
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MapPin size={18} style={{ marginRight: 8, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  123 Real Estate Blvd, Luxury City, 10001
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Mail size={18} style={{ marginRight: 8, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  info@luxeestates.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone size={18} style={{ marginRight: 8, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>
              
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Subscribe to our newsletter
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Your email address"
                  size="small"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'secondary.main',
                      },
                    },
                    '& input': {
                      color: 'white',
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton 
                          edge="end" 
                          sx={{ color: 'secondary.main' }}
                        >
                          <ArrowRight size={20} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
          <Typography variant="body2" sx={{ opacity: 0.7, mb: { xs: 1, sm: 0 } }}>
            &copy; {new Date().getFullYear()} LuxeEstates. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Designed & Developed with ❤️
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;