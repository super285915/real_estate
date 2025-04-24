import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Breadcrumbs,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { HomeIcon, MapPin, Bed, Bath, Square } from 'lucide-react';
import { useTheme } from '@mui/material/styles';
import { useFavorites } from '../contexts/FavoritesContext';
import FavoriteButton from '../components/common/FavoriteButton';
import { properties, Property } from '../data/properties';

const FavoritesPage: React.FC = () => {
  const theme = useTheme();
  const { favorites } = useFavorites();
  
  // Filter properties to show only favorited ones
  const favoritedProperties = properties.filter((property: Property) => 
    favorites.includes(property.id)
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Box>
      {/* Page Header */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          py: 6,
          color: 'white',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(to bottom, rgba(10,36,99,0.9), rgba(10,36,99,0.95))`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs 
            aria-label="breadcrumb"
            sx={{ 
              mb: 2,
              '& .MuiBreadcrumbs-ol': {
                color: 'white',
              },
              '& .MuiBreadcrumbs-separator': {
                color: 'rgba(255,255,255,0.5)',
              },
            }}
          >
            <Link 
              color="inherit" 
              component={RouterLink} 
              to="/" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <HomeIcon size={16} style={{ marginRight: 4 }} />
              Home
            </Link>
            <Typography color="white">My Favorites</Typography>
          </Breadcrumbs>
          
          <Typography variant="h2" component="h1" sx={{ fontWeight: 600, mb: 2 }}>
            My Favorite Properties
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, maxWidth: 600 }}>
            {favoritedProperties.length} {favoritedProperties.length === 1 ? 'property' : 'properties'} saved to your favorites
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {favoritedProperties.length === 0 ? (
          <Box 
            sx={{ 
              textAlign: 'center',
              py: 8,
            }}
          >
            <Typography variant="h5" color="text.secondary" gutterBottom>
              No favorites yet
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Start adding properties to your favorites by clicking the heart icon
            </Typography>
            <Link
              component={RouterLink}
              to="/listings"
              sx={{
                textDecoration: 'none',
                color: 'primary.main',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Browse Properties
            </Link>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {favoritedProperties.map((property) => (
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
                        style={{ width: '100%', height: 250, objectFit: 'cover' }}
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

                    <Box
                      sx={{ 
                        display: 'flex',
                        gap: 3,
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
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default FavoritesPage; 