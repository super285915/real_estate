import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Phone, Mail, User } from 'lucide-react';

const CallToAction: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: 10, bgcolor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              Ready to Find Your Dream Home?
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 500 }}
            >
              Let our experienced real estate agents help you find the perfect property for your needs and budget. Contact us today to get started on your home buying journey.
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: 'primary.light',
                      color: 'white',
                      mr: 2,
                    }}
                  >
                    <Phone size={20} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Call us at
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      +1 (555) 123-4567
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: 'primary.light',
                      color: 'white',
                      mr: 2,
                    }}
                  >
                    <Mail size={20} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Email us at
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      info@luxeestates.com
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={RouterLink}
              to="/contact"
              startIcon={<User />}
              sx={{ mt: 2 }}
            >
              Contact an Agent
            </Button>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
                backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                position: 'relative',
                overflow: 'hidden',
                color: 'white',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'url(https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) no-repeat center center',
                  backgroundSize: 'cover',
                  opacity: 0.2,
                  zIndex: 0,
                }
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Sell Your Property
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4, 
                    opacity: 0.9,
                    maxWidth: 450,
                  }}
                >
                  Looking to sell your property? Our experts can help you get the best price for your home with our comprehensive marketing strategies and wide network of potential buyers.
                </Typography>

                <Box 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    component={RouterLink}
                    to="/contact"
                    sx={{ minWidth: 160 }}
                  >
                    Request Valuation
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    component={RouterLink}
                    to="/listings"
                    sx={{ 
                      minWidth: 160,
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255,255,255,0.1)',
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CallToAction;