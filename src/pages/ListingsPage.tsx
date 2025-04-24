import React, { useState, useMemo, useEffect } from 'react';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
  Pagination,
  Paper,
  Select,
  SelectChangeEvent,
  Slider,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Search,
  ChevronDown,
  FilterX,
  Grid as GridIcon,
  List,
  Home as HomeIcon,
} from 'lucide-react';
import FavoriteButton from '../components/common/FavoriteButton';
import { properties, Property } from '../data/properties';


const ListingsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchParams] = useSearchParams();
  
  // Filter states
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<number[]>([100000, 1500000]);
  const [bedroomsFilter, setBedroomsFilter] = useState<string[]>([]);
  const [propertyTypes, setPropertyTypes] = useState<string[]>(['House', 'Apartment', 'Townhouse', 'Commercial']);
  const [sortBy, setSortBy] = useState<string>('newest');
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Initialize filters from URL parameters
  const initializeFilters = () => {
    const type = searchParams.get('type');
    const location = searchParams.get('location');
    const price = searchParams.get('price');
    const beds = searchParams.get('beds');

    console.log('Initializing filters with params:', { type, location, price, beds });

    // Set initial property types based on URL parameter
    if (type) {
      const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
      setPropertyTypes([capitalizedType]);
      console.log('Setting property type:', capitalizedType);
    }

    // Set initial search term from location
    if (location) {
      setSearchTerm(location);
      console.log('Setting location search:', location);
    }

    // Set initial price range
    if (price) {
      if (price.endsWith('+')) {
        const minPrice = Number(price.replace('+', ''));
        setPriceRange([minPrice, 10000000]);
        console.log('Setting price range (min+):', [minPrice, 10000000]);
      } else {
        const [min, max] = price.split('-').map(Number);
        if (!isNaN(min) && !isNaN(max)) {
          setPriceRange([min, max]);
          console.log('Setting price range:', [min, max]);
        }
      }
    }

    // Set initial bedrooms filter
    if (beds) {
      const bedroomValue = beds.replace('+', '');
      if (!isNaN(Number(bedroomValue))) {
        setBedroomsFilter([bedroomValue]);
        console.log('Setting bedrooms filter:', [bedroomValue]);
      }
    }
  };

  // Initialize filters from URL parameters on component mount and when params change
  useEffect(() => {
    console.log('Search params changed, reinitializing filters');
    initializeFilters();
  }, [searchParams]);

  const ITEMS_PER_PAGE = 9;

  // Filter properties based on all criteria
  const filteredProperties = useMemo(() => {
    return properties
      .filter(property => {
        // Price range filter
        const withinPriceRange = property.price >= priceRange[0] && property.price <= priceRange[1];

        // Bedrooms filter
        const matchesBedrooms = bedroomsFilter.length === 0 || bedroomsFilter.some(bed => {
          if (bed === '5+') {
            return property.bedrooms >= 5;
          }
          return property.bedrooms === parseInt(bed);
        });

        // Property type filter
        const matchesType = propertyTypes.includes(property.propertyType);

        // Search term filter
        const matchesSearch = searchTerm === '' || 
          property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.propertyType.toLowerCase().includes(searchTerm.toLowerCase());

        return withinPriceRange && matchesBedrooms && matchesType && matchesSearch;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'price_high':
            return b.price - a.price;
          case 'price_low':
            return a.price - b.price;
          case 'beds':
            return b.bedrooms - a.bedrooms;
          case 'size':
            return b.area - a.area;
          default: // 'newest'
            return b.id - a.id;
        }
      });
  }, [priceRange, bedroomsFilter, propertyTypes, searchTerm, sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const paginatedProperties = useMemo(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    return filteredProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProperties, page]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [priceRange, bedroomsFilter, propertyTypes, searchTerm, sortBy]);

  const handleViewModeChange = (
    event: React.MouseEvent<HTMLElement>,
    newMode: 'grid' | 'list' | null,
  ) => {
    if (newMode !== null) {
      setViewMode(newMode);
    }
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleBedroomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    
    if (checked) {
      setBedroomsFilter([...bedroomsFilter, value]);
    } else {
      setBedroomsFilter(bedroomsFilter.filter(bed => bed !== value));
    }
  };

  const handlePropertyTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    
    if (checked) {
      setPropertyTypes([...propertyTypes, value]);
    } else {
      setPropertyTypes(propertyTypes.filter(type => type !== value));
    }
  };

  const handleSortByChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const resetFilters = () => {
    setPriceRange([100000, 1500000]);
    setBedroomsFilter([]);
    setPropertyTypes(['House', 'Apartment', 'Townhouse', 'Commercial']);
    setSortBy('newest');
    setSearchTerm('');
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
            backgroundImage: `linear-gradient(to bottom, rgba(10,36,99,0.9), rgba(10,36,99,0.95)), url('https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
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
            <Link color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon size={16} style={{ marginRight: 4 }} />
              Home
            </Link>
            <Typography color="white">Properties</Typography>
          </Breadcrumbs>
          
          <Typography variant="h2" component="h1" sx={{ fontWeight: 600, mb: 2 }}>
            Property Listings
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, maxWidth: 600 }}>
            Browse our extensive collection of premium properties to find your perfect home
          </Typography>
        </Container>
      </Box>
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {/* Sidebar Filters */}
          <Grid item xs={12} md={3}>
            <Paper 
              elevation={1} 
              sx={{ 
                p: 3, 
                position: 'sticky', 
                top: 90, 
                maxHeight: 'calc(100vh - 100px)',
                overflowY: 'auto',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" fontWeight={600}>Filters</Typography>
                <Button 
                  startIcon={<FilterX size={16} />}
                  onClick={resetFilters}
                  size="small"
                >
                  Reset
                </Button>
              </Box>

              {/* Search */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" fontWeight={500} sx={{ mb: 1 }}>
                  Search
                </Typography>
                <TextField
                  placeholder="Search by location, name..."
                  fullWidth
                  size="small"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search size={18} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Price Range */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" fontWeight={500} sx={{ mb: 1 }}>
                  Price Range
                </Typography>
                <Box sx={{ px: 1 }}>
                  <Slider
                    value={priceRange}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    valueLabelFormat={formatPrice}
                    min={100000}
                    max={2000000}
                    step={50000}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {formatPrice(priceRange[0])}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {formatPrice(priceRange[1])}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Bedrooms */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" fontWeight={500} sx={{ mb: 1 }}>
                  Bedrooms
                </Typography>
                <FormGroup>
                  {['1', '2', '3', '4', '5+'].map((bedCount) => (
                    <FormControlLabel
                      key={bedCount}
                      control={
                        <Checkbox 
                          checked={bedroomsFilter.includes(bedCount)}
                          onChange={handleBedroomChange}
                          value={bedCount}
                          size="small"
                        />
                      }
                      label={`${bedCount} ${bedCount === '1' ? 'Bedroom' : 'Bedrooms'}`}
                    />
                  ))}
                </FormGroup>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Property Type */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" fontWeight={500} sx={{ mb: 1 }}>
                  Property Type
                </Typography>
                <FormGroup>
                  {['House', 'Apartment', 'Townhouse', 'Commercial'].map((type) => (
                    <FormControlLabel
                      key={type}
                      control={
                        <Checkbox 
                          checked={propertyTypes.includes(type)}
                          onChange={handlePropertyTypeChange}
                          value={type}
                          size="small"
                        />
                      }
                      label={type}
                    />
                  ))}
                </FormGroup>
              </Box>
            </Paper>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            {/* Sorting Controls */}
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                mb: 3,
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 2, sm: 0 },
              }}
            >
              <Typography>
                Showing <strong>{filteredProperties.length}</strong> properties
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <FormControl size="small" sx={{ minWidth: 180 }}>
                  <Select
                    value={sortBy}
                    onChange={handleSortByChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Sort by' }}
                  >
                    <MenuItem value="newest">Newest First</MenuItem>
                    <MenuItem value="price_high">Price: High to Low</MenuItem>
                    <MenuItem value="price_low">Price: Low to High</MenuItem>
                    <MenuItem value="beds">Most Bedrooms</MenuItem>
                    <MenuItem value="size">Largest Size</MenuItem>
                  </Select>
                </FormControl>
                
                <ToggleButtonGroup
                  value={viewMode}
                  exclusive
                  onChange={handleViewModeChange}
                  aria-label="view mode"
                  size="small"
                >
                  <ToggleButton value="grid" aria-label="grid view">
                    <GridIcon size={20} />
                  </ToggleButton>
                  <ToggleButton value="list" aria-label="list view">
                    <List size={20} />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Box>

            {/* Property Listings */}
            <Grid container spacing={3}>
              {paginatedProperties.map((property) => (
                <Grid 
                  item 
                  key={property.id} 
                  xs={12} 
                  sm={viewMode === 'grid' ? 6 : 12} 
                  md={viewMode === 'grid' ? 4 : 12}
                >
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
                      display: 'flex',
                      flexDirection: viewMode === 'grid' ? 'column' : { xs: 'column', sm: 'row' },
                    }}
                  >
                    <Box 
                      sx={{ 
                        position: 'relative',
                        width: viewMode === 'list' && !isMobile ? '40%' : '100%',
                      }}
                    >
                      <CardActionArea 
                        component={RouterLink} 
                        to={`/property/${property.id}`}
                      >
                        <CardMedia
                          component="img"
                          style={{
                            height: viewMode === 'grid' ? 260 : 300,
                          }}
                          // height={viewMode === 'grid' ? 260 : 300}
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

                    <Box sx={{ 
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                      <CardContent sx={{ p: 3, flex: 1 }}>
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
                            display: 'inline-block',
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            py: 0.5,
                            px: 2,
                            borderRadius: 1,
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            mb: 3,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                          }}
                        >
                          {property.propertyType}
                        </Box>
                        
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
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Pagination */}
            {totalPages > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <Pagination 
                  count={totalPages} 
                  page={page} 
                  onChange={handlePageChange} 
                  color="primary" 
                  size={isMobile ? 'small' : 'medium'}
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ListingsPage;