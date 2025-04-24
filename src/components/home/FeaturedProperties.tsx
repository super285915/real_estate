import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { useTheme } from '@mui/material/styles';
import FavoriteButton from '../common/FavoriteButton';
import { properties, Property } from '../../data/properties';

const FeaturedProperties: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  

  // Filter only featured properties
  const onlyFeaturedProperties = properties.filter(property => property.featured);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 600,
              mb: 2,
            }}
          >
            Featured Properties
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ maxWidth: 700, mx: 'auto' }}
          >
            Explore our handpicked selection of premier properties, each offering exceptional 
            features and desirable locations for discerning buyers.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {onlyFeaturedProperties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardActionArea component={RouterLink} to={`/property/${property.id}`}>
                    <CardMedia
                      component="img"
                      style={{
                        height: isMobile ? '200px' : isTablet ? '300px' : '400px',
                      }}
                      image={property.image}
                      alt={property.title}
                      sx={{
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  </CardActionArea>

                  <FavoriteButton propertyId={property.id} />

                  {property.featured && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        bgcolor: 'warning.main',
                        color: 'warning.contrastText',
                        py: 0.5,
                        px: 2,
                        borderRadius: 1,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Featured
                    </Box>
                  )}
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <MapPin size={16} color={theme.palette.primary.main} style={{ marginRight: 6 }} />
                    <Typography variant="body2" color="text.secondary" fontWeight={500}>
                      {property.location}
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="h6" 
                    component={RouterLink}
                    to={`/property/${property.id}`}
                    sx={{ 
                      color: 'text.primary',
                      textDecoration: 'none',
                      fontWeight: 600,
                      display: 'block',
                      mb: 2,
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {property.title}
                  </Typography>
                  
                  <Typography 
                    variant="h5" 
                    color="primary.main" 
                    sx={{ fontWeight: 700, mb: 3 }}
                  >
                    {formatPrice(property.price)}
                  </Typography>
                  
                  <Stack 
                    direction="row" 
                    spacing={3}
                    sx={{
                      py: 2,
                      borderTop: 1,
                      borderColor: 'divider',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Bed size={18} style={{ marginRight: 6 }} color={theme.palette.text.secondary} />
                      <Typography variant="body2" color="text.secondary" fontWeight={500}>
                        {property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Bath size={18} style={{ marginRight: 6 }} color={theme.palette.text.secondary} />
                      <Typography variant="body2" color="text.secondary" fontWeight={500}>
                        {property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Square size={18} style={{ marginRight: 6 }} color={theme.palette.text.secondary} />
                      <Typography variant="body2" color="text.secondary" fontWeight={500}>
                        {property.area.toLocaleString()} sq ft
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>

                <CardActions sx={{ px: 3, pb: 3 }}>
                  <Button 
                    variant="outlined" 
                    fullWidth
                    component={RouterLink}
                    to={`/property/${property.id}`}
                    sx={{
                      py: 1,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1rem',
                    }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button 
            variant="contained" 
            size="large"
            component={RouterLink}
            to="/listings"
            sx={{ 
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
            }}
          >
            View All Properties
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProperties;