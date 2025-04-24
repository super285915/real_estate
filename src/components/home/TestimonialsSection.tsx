import React from 'react';
import {
  Avatar,
  Box,
  Card,
  Container,
  Rating,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import { Quote } from 'lucide-react';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Jennifer Anderson',
    role: 'Home Buyer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    text: 'Working with LuxeEstates was an absolute pleasure. They found us our dream home that checked all our boxes. Their expertise in the local market and commitment to understanding our needs made the process smooth and enjoyable.',
  },
  {
    id: 2,
    name: 'Michael Brown',
    role: 'Property Seller',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    text: "I sold my property through LuxeEstates and couldn't be happier. Their marketing strategy was exceptional, and they secured a buyer within two weeks at a price that exceeded my expectations. Highly recommended!",
  },
  {
    id: 3,
    name: 'Sophia Martinez',
    role: 'Luxury Apartment Owner',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    text: "The team at LuxeEstates truly understands luxury real estate. They helped me find an exclusive apartment in the heart of the city. Their attention to detail and personalized service really set them apart from other agents I've worked with.",
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'First-time Buyer',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    text: "As a first-time homebuyer, I had countless questions about the process. The team at LuxeEstates was incredibly patient and educated me every step of the way. I'm now the proud owner of a beautiful home thanks to their guidance.",
  },
];

const TestimonialsSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Show only 1 testimonial on mobile, 2 on tablet, 3 on desktop
  const itemsPerSlide = isMobile ? 1 : isTablet ? 2 : 3;
  
  const testimonialSlides = [];
  for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
    testimonialSlides.push(testimonials.slice(i, i + itemsPerSlide));
  }

  return (
    <Box sx={{ 
      py: { xs: 4, sm: 6, md: 8 }, 
      px: { xs: 2, sm: 3, md: 4 },
      bgcolor: 'primary.main' 
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, sm: 5, md: 6 }, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: 'white',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Client Testimonials
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: 700, 
              mx: 'auto',
              color: 'white',
              opacity: 0.8,
              px: { xs: 2, sm: 0 },
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            Discover what our clients have to say about their experience working with LuxeEstates
            and finding their perfect properties.
          </Typography>
        </Box>

        <Carousel
          animation="slide"
          autoPlay={false}
          navButtonsAlwaysVisible={!isMobile}
          navButtonsProps={{
            style: {
              backgroundColor: theme.palette.secondary.main,
              borderRadius: '50%',
              color: theme.palette.secondary.contrastText,
              marginTop: 0,
              transform: 'translateY(-50%)',
              display: isMobile ? 'none' : 'flex'
            }
          }}
          indicatorContainerProps={{
            style: {
              marginTop: '20px',
              marginBottom: isMobile ? '20px' : 0
            }
          }}
          indicatorIconButtonProps={{
            style: {
              color: 'rgba(255, 255, 255, 0.4)',
              padding: '5px',
              transition: 'color 0.2s'
            }
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: theme.palette.secondary.main,
            }
          }}
        >
          {testimonialSlides.map((slide, slideIndex) => (
            <Box
              key={slideIndex}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: slide.length > 1 ? 'row' : 'column' },
                gap: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 2 },
                px: { xs: 1, sm: 2 },
                justifyContent: 'center',
                alignItems: 'stretch'
              }}
            >
              {slide.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  sx={{
                    p: { xs: 2, sm: 3 },
                    borderRadius: 2,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'visible',
                    maxWidth: { xs: '100%', sm: slide.length === 1 ? '600px' : 'none' },
                    mx: 'auto',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -16,
                      left: 24,
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      bgcolor: 'secondary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 1,
                    },
                  }}
                >
                  <Box sx={{ position: 'absolute', top: -8, left: 32, color: 'white', zIndex: 2 }}>
                    <Quote size={16} />
                  </Box>
                  
                  <Box sx={{ 
                    mb: 3,
                    flexGrow: 1,
                    minHeight: { xs: 'auto', sm: isMobile ? 'auto' : '120px' }
                  }}>
                    <Typography 
                      variant="body1" 
                      color="text.secondary" 
                      sx={{ 
                        fontStyle: 'italic', 
                        mb: 2,
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>
                    <Rating value={testimonial.rating} readOnly size="small" sx={{ mb: 1 }} />
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    mt: 'auto'
                  }}>
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{ 
                        width: { xs: 48, sm: 56 }, 
                        height: { xs: 48, sm: 56 }, 
                        mr: 2 
                      }}
                    />
                    <Box>
                      <Typography 
                        variant="subtitle1" 
                        fontWeight={600}
                        sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;