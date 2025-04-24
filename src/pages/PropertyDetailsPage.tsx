import React, { useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import { Home as HomeIcon, Bed, Bath, Square, MapPin, Heart, Share, Phone, Mail, Verified, CheckCircle as CircleCheck, ArrowRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { properties } from '../data/properties';
import FavoriteButton from '../components/common/FavoriteButton';

const PropertyDetailsPage: React.FC = () => {
  const theme = useTheme();
  const { id } = useParams();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const [activeTab, setActiveTab] = useState(0);
  const [message, setMessage] = useState(`I'm interested in this property (${properties.find(p => p.id === Number(id))?.title}). Please contact me with more information.`);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const property = properties.find(p => p.id === Number(id));

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  // Combine all property images into a single array
  const images = property ? [
    property.images.main,
    property.images.living,
    property.images.kitchen,
    ...property.images.bedroom,
    ...property.images.bathroom,
    ...property.images.exterior,
    ...(property.images.additional || [])
  ] : [];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  if (!property) {
    return (
      <Container>
        <Typography>Property not found</Typography>
      </Container>
    );
  }

  const features = [
    'Modern Kitchen',
    'Hardwood Floors',
    'Central Air',
    'Large Windows',
    'Walk-in Closets',
    'Attached Garage',
    'Private Backyard',
    'Smart Home Features',
  ];

  return (
    <Box>
      {/* Image Gallery */}
      <Box sx={{ position: 'relative', height: '70vh', bgcolor: 'grey.900' }}>
        <Box
          component="img"
          src={images[currentImageIndex]}
          alt={property.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Navigation Arrows */}
        <IconButton
          onClick={handlePrevImage}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'white',
            '&:hover': { bgcolor: 'white' },
          }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          onClick={handleNextImage}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'white',
            '&:hover': { bgcolor: 'white' },
          }}
        >
          <ChevronRight />
        </IconButton>

        {/* Favorite Button */}
        <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
          <FavoriteButton propertyId={property.id} />
        </Box>

        {/* Property Status */}
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            left: 20,
            bgcolor: 'primary.main',
            color: 'white',
            py: 0.5,
            px: 2,
            borderRadius: 1,
          }}
        >
          For Sale
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Left Column - Property Details */}
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 4 }}>
              <Breadcrumbs sx={{ mb: 2 }}>
                <Link
                  component={RouterLink}
                  to="/"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'text.primary',
                    textDecoration: 'none',
                  }}
                >
                  <HomeIcon size={16} style={{ marginRight: 4 }} />
                  Home
                </Link>
                <Link
                  component={RouterLink}
                  to="/listings"
                  sx={{
                    color: 'text.primary',
                    textDecoration: 'none',
                  }}
                >
                  Properties
                </Link>
                <Typography color="text.secondary">{property.title}</Typography>
              </Breadcrumbs>

              <Typography variant="h3" component="h1" sx={{ fontWeight: 600, mb: 2 }}>
                {property.title}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <MapPin size={20} color={theme.palette.primary.main} style={{ marginRight: 8 }} />
                <Typography variant="h6" color="text.secondary" fontWeight={500}>
                  {property.location}
                </Typography>
              </Box>

              <Typography variant="h3" color="primary.main" sx={{ fontWeight: 700, mb: 4 }}>
                {formatPrice(property.price)}
              </Typography>

              <Grid container spacing={4} sx={{ mb: 4 }}>
                <Grid item xs={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Bed size={24} style={{ marginRight: 8 }} />
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {property.bedrooms}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Bedrooms
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Bath size={24} style={{ marginRight: 8 }} />
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {property.bathrooms}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Bathrooms
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Square size={24} style={{ marginRight: 8 }} />
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {property.area.toLocaleString()}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Square Feet
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Description
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                {property.details.description}
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Property Details
              </Typography>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ mr: 1 }}>Year Built:</Typography>
                    <Typography variant="body1">{property.details.yearBuilt}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ mr: 1 }}>Garage:</Typography>
                    <Typography variant="body1">{property.details.garage} Cars</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ mr: 1 }}>Heating:</Typography>
                    <Typography variant="body1">{property.details.heating}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ mr: 1 }}>Cooling:</Typography>
                    <Typography variant="body1">{property.details.cooling}</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Amenities
              </Typography>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {property.details.amenities.map((amenity, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Check size={20} color={theme.palette.primary.main} style={{ marginRight: 8 }} />
                      <Typography>{amenity}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Utilities & Location
              </Typography>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>Utilities:</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {property.details.utilities.map((utility, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Check size={16} color={theme.palette.primary.main} style={{ marginRight: 8 }} />
                        <Typography variant="body2">{utility}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>School District:</Typography>
                    <Typography variant="body2">{property.details.schoolDistrict}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>Neighborhood:</Typography>
                    <Typography variant="body2">{property.details.neighborhood}</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Features
              </Typography>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Check size={20} color={theme.palette.primary.main} style={{ marginRight: 8 }} />
                      <Typography>{feature}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Location
              </Typography>
              <Paper sx={{ height: 300, mb: 4 }}>
                {/* Map component would go here */}
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    bgcolor: 'grey.100',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1617911396096!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </Box>

              </Paper>
            </Box>
          </Grid>

          {/* Right Column - Agent Contact */}
          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                  src={property.agent.photo}
                  sx={{ width: 60, height: 60, mr: 2 }}
                />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {property.agent.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {property.agent.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {property.agent.experience} years experience
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Phone size={16} style={{ marginRight: 8 }} />
                  <Typography>{property.agent.phone}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Mail size={16} style={{ marginRight: 8 }} />
                  <Typography>{property.agent.email}</Typography>
                </Box>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Interested in this property?
              </Typography>

              <Box component="form" noValidate>
                <TextField
                  fullWidth
                  placeholder="Your Name"
                  margin="normal"
                  size="small"
                />
                <TextField
                  fullWidth
                  placeholder="Your Email"
                  margin="normal"
                  size="small"
                />
                <TextField
                  fullWidth
                  placeholder="Your Message"
                  multiline
                  rows={4}
                  margin="normal"
                  size="small"
                />
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PropertyDetailsPage;