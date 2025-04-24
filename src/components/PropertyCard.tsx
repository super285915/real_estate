import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  IconButton,
  Grid,
  useTheme,
} from '@mui/material';
import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  propertyType: string;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  imageUrl,
  propertyType,
  isFavorite = false,
  onFavoriteClick,
}) => {
  const theme = useTheme();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card
      component={RouterLink}
      to={`/property/${id}`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
          '& .MuiCardMedia-root': {
            transform: 'scale(1.08)',
          },
          '& .property-type-chip': {
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
          '& .favorite-button': {
            transform: 'scale(1.1)',
            backgroundColor: 'white',
          },
        },
      }}
    >
      <Box sx={{ position: 'relative', paddingTop: '66.67%', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            zIndex: 1,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          className="property-type-chip"
        >
          <Chip
            label={propertyType}
            size="small"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              '& .MuiChip-label': {
                px: 1.5,
                py: 0.5,
              },
            }}
          />
        </Box>
        {onFavoriteClick && (
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              onFavoriteClick();
            }}
            className="favorite-button"
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: 'white',
                transform: 'scale(1.1)',
              },
              zIndex: 1,
            }}
          >
            <Heart
              size={20}
              color={isFavorite ? theme.palette.primary.main : theme.palette.text.secondary}
              fill={isFavorite ? theme.palette.primary.main : 'none'}
            />
          </IconButton>
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: theme.palette.text.primary,
            mb: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            color: theme.palette.text.secondary,
          }}
        >
          <MapPin size={16} style={{ marginRight: 4 }} />
          <Typography
            variant="body2"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {location}
          </Typography>
        </Box>

        <Typography
          variant="h5"
          color="primary"
          sx={{
            fontWeight: 700,
            mb: 2,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {formatPrice(price)}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.text.secondary,
                transition: 'color 0.2s ease-in-out',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <Bed size={18} style={{ marginRight: 4 }} />
              <Typography variant="body2">{bedrooms}</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.text.secondary,
                transition: 'color 0.2s ease-in-out',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <Bath size={18} style={{ marginRight: 4 }} />
              <Typography variant="body2">{bathrooms}</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.text.secondary,
                transition: 'color 0.2s ease-in-out',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <Square size={18} style={{ marginRight: 4 }} />
              <Typography variant="body2">{area} m²</Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PropertyCard; 