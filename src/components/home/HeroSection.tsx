import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useMediaQuery,
  alpha,
} from '@mui/material';
import { Search, ChevronDown, MapPin } from 'lucide-react';
import { useTheme } from '@mui/material/styles';
import { uniqueLocations } from '../../utils/propertyUtils';
import { useTheme as useAppTheme } from '../../contexts/ThemeContext';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const { themeMode } = useAppTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [propertyType, setPropertyType] = useState('all');
  const [location, setLocation] = useState<string>('');
  const [priceRange, setPriceRange] = useState('any');
  const [bedrooms, setBedrooms] = useState('any');

  const handlePropertyTypeChange = (event: SelectChangeEvent) => {
    setPropertyType(event.target.value);
  };

  const handlePriceRangeChange = (event: SelectChangeEvent) => {
    setPriceRange(event.target.value);
  };

  const handleBedroomsChange = (event: SelectChangeEvent) => {
    setBedrooms(event.target.value);
  };

  const handleLocationChange = (event: React.SyntheticEvent, value: string | null) => {
    setLocation(value || '');
  };

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (propertyType !== 'all') {
      params.append('type', propertyType);
    }
    
    if (location) {
      params.append('location', location);
    }
    
    if (priceRange !== 'any') {
      params.append('price', priceRange);
    }
    
    if (bedrooms !== 'any') {
      params.append('beds', bedrooms);
    }

    navigate({
      pathname: '/listings',
      search: params.toString()
    });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '100vh', md: '85vh' },
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <Box sx={{ textAlign: 'center', color: 'white', mb: 6 }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                Find Your Dream Home
              </Typography>
              <Typography 
                variant="h5" 
                component="h2"
                sx={{ 
                  fontWeight: 400,
                  opacity: 0.9,
                  maxWidth: '700px',
                  mx: 'auto',
                  mb: 4,
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                Discover the perfect property from our exclusive selection of premium real estate listings
              </Typography>
            </Box>

            {/* Search Form */}
            <Paper
              elevation={5}
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 2,
                background: themeMode === 'dark' 
                  ? alpha(theme.palette.background.paper, 0.9)
                  : 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${
                  themeMode === 'dark'
                    ? alpha(theme.palette.divider, 0.1)
                    : alpha(theme.palette.divider, 0.05)
                }`,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 2, 
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Find Your Perfect Property
                  </Typography>
                </Grid>

                {/* Property Type */}
                <Grid item xs={12} sm={6} md={3}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 1, 
                      fontWeight: 500,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Property Type
                  </Typography>
                  <Select
                    fullWidth
                    value={propertyType}
                    onChange={handlePropertyTypeChange}
                    size="small"
                    sx={{ 
                      bgcolor: themeMode === 'dark' 
                        ? alpha(theme.palette.background.paper, 0.8)
                        : alpha(theme.palette.background.paper, 0.9),
                      '& .MuiSelect-select': { 
                        display: 'flex', 
                        alignItems: 'center',
                      },
                    }}
                    IconComponent={() => (
                      <InputAdornment position="end" sx={{ pr: 1 }}>
                        <ChevronDown size={18} />
                      </InputAdornment>
                    )}
                  >
                    <MenuItem value="all">All Properties</MenuItem>
                    <MenuItem value="house">Houses</MenuItem>
                    <MenuItem value="apartment">Apartments</MenuItem>
                    <MenuItem value="villa">Villas</MenuItem>
                    <MenuItem value="commercial">Commercial</MenuItem>
                  </Select>
                </Grid>

                {/* Location */}
                <Grid item xs={12} sm={6} md={3}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 1, 
                      fontWeight: 500,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Location
                  </Typography>
                  <Autocomplete
                    freeSolo
                    options={uniqueLocations.map(loc => loc.label)}
                    value={location}
                    onChange={handleLocationChange}
                    onInputChange={(event, value) => setLocation(value)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        size="small"
                        placeholder="City, neighborhood, or address"
                        sx={{
                          bgcolor: themeMode === 'dark' 
                            ? alpha(theme.palette.background.paper, 0.8)
                            : alpha(theme.palette.background.paper, 0.9),
                        }}
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: (
                            <InputAdornment position="start">
                              <MapPin size={18} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                    ListboxProps={{
                      sx: { maxHeight: '200px' }
                    }}
                  />
                </Grid>

                {/* Price Range */}
                <Grid item xs={12} sm={6} md={3}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 1, 
                      fontWeight: 500,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Price Range
                  </Typography>
                  <Select
                    fullWidth
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                    size="small"
                    sx={{ 
                      bgcolor: themeMode === 'dark' 
                        ? alpha(theme.palette.background.paper, 0.8)
                        : alpha(theme.palette.background.paper, 0.9),
                    }}
                    IconComponent={() => (
                      <InputAdornment position="end" sx={{ pr: 1 }}>
                        <ChevronDown size={18} />
                      </InputAdornment>
                    )}
                  >
                    <MenuItem value="any">Any Price</MenuItem>
                    <MenuItem value="0-100000">Up to $100,000</MenuItem>
                    <MenuItem value="100000-250000">$100,000 - $250,000</MenuItem>
                    <MenuItem value="250000-500000">$250,000 - $500,000</MenuItem>
                    <MenuItem value="500000-750000">$500,000 - $750,000</MenuItem>
                    <MenuItem value="750000-1000000">$750,000 - $1,000,000</MenuItem>
                    <MenuItem value="1000000+">$1,000,000+</MenuItem>
                  </Select>
                </Grid>

                {/* Bedrooms */}
                <Grid item xs={12} sm={6} md={3}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 1, 
                      fontWeight: 500,
                      color: theme.palette.text.primary,
                    }}
                  >
                    Bedrooms
                  </Typography>
                  <Select
                    fullWidth
                    value={bedrooms}
                    onChange={handleBedroomsChange}
                    size="small"
                    sx={{ 
                      bgcolor: themeMode === 'dark' 
                        ? alpha(theme.palette.background.paper, 0.8)
                        : alpha(theme.palette.background.paper, 0.9),
                    }}
                    IconComponent={() => (
                      <InputAdornment position="end" sx={{ pr: 1 }}>
                        <ChevronDown size={18} />
                      </InputAdornment>
                    )}
                  >
                    <MenuItem value="any">Any</MenuItem>
                    <MenuItem value="1">1+</MenuItem>
                    <MenuItem value="2">2+</MenuItem>
                    <MenuItem value="3">3+</MenuItem>
                    <MenuItem value="4">4+</MenuItem>
                    <MenuItem value="5">5+</MenuItem>
                  </Select>
                </Grid>

                {/* Search Button */}
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    startIcon={<Search />}
                    onClick={handleSearch}
                    sx={{
                      mt: 1,
                      py: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    Search Properties
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;