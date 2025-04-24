import React from 'react';
import {
  Avatar,
  Box,
  Breadcrumbs,
  Card,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Home as HomeIcon, Users, Award, TrendingUp, Target, Verified } from 'lucide-react';

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/5324924/pexels-photo-5324924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'With over 15 years of experience in luxury real estate, Sarah leads LuxeEstates with a passion for connecting clients with their dream properties.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Chief Operating Officer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Michael oversees our day-to-day operations and ensures that each client receives exceptional service throughout their real estate journey.',
  },
  {
    id: 3,
    name: 'Jessica Miller',
    title: 'Lead Property Consultant',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Jessica specializes in high-end residential properties and has a proven track record of finding perfect homes for discerning buyers.',
  },
  {
    id: 4,
    name: 'David Wilson',
    title: 'Commercial Property Specialist',
    image: 'https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'With expertise in commercial real estate, David helps businesses find ideal spaces that align with their operational needs and growth strategies.',
  },
];

const AboutPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
            backgroundImage: `linear-gradient(to bottom, rgba(10,36,99,0.85), rgba(10,36,99,0.95)), url('https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
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
            <Typography color="white">About Us</Typography>
          </Breadcrumbs>
          
          <Typography variant="h2" component="h1" sx={{ fontWeight: 600, mb: 2 }}>
            About LuxeEstates
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, maxWidth: 700 }}>
            Your trusted partner in finding exceptional properties that match your lifestyle and aspirations
          </Typography>
        </Container>
      </Box>
      
      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Our Story */}
        <Grid container spacing={5} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
              Our Story
            </Typography>
            <Typography paragraph>
              Founded in 2010, LuxeEstates began with a simple mission: to provide unparalleled real estate services that prioritize client satisfaction above all else. What started as a small team of passionate agents has grown into a respected agency known for our expertise, integrity, and personalized approach.
            </Typography>
            <Typography paragraph>
              We've built our reputation by understanding that a home is more than just a property—it's a reflection of your lifestyle, goals, and dreams. Whether you're searching for your dream home, looking to sell, or exploring investment opportunities, our team is committed to making your real estate journey smooth and successful.
            </Typography>
            <Typography paragraph>
              At LuxeEstates, we combine in-depth market knowledge with innovative technology to provide exceptional service. Our team of dedicated professionals is passionate about matching clients with properties that suit their unique needs and preferences.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.pexels.com/photos/6193529/pexels-photo-6193529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="LuxeEstates team meeting"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>

        {/* Our Values */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Our Values
          </Typography>
          <Typography 
            paragraph 
            align="center" 
            sx={{ maxWidth: 700, mx: 'auto', mb: 5 }}
          >
            Our core values guide everything we do at LuxeEstates, ensuring that we consistently deliver exceptional experiences for our clients.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    color: 'white',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <Verified size={28} />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Integrity
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We operate with honesty and transparency in all our dealings, earning our clients' trust through ethical practices.
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    color: 'white',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <Target size={28} />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Excellence
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We strive for excellence in every aspect of our service, from property marketing to client communications.
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    color: 'white',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <TrendingUp size={28} />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Innovation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We embrace innovative technologies and strategies to provide forward-thinking solutions for our clients.
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    color: 'white',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <Users size={28} />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Client Focus
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We prioritize our clients' needs and objectives, delivering personalized service that exceeds expectations.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Stats */}
        <Box
          sx={{
            py: 6,
            px: 3,
            mb: 8,
            borderRadius: 2,
            backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
            color: 'white',
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" component="div" fontWeight={600}>
                  12+
                </Typography>
                <Typography variant="body1">Years in Business</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" component="div" fontWeight={600}>
                  500+
                </Typography>
                <Typography variant="body1">Properties Sold</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" component="div" fontWeight={600}>
                  98%
                </Typography>
                <Typography variant="body1">Client Satisfaction</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" component="div" fontWeight={600}>
                  20+
                </Typography>
                <Typography variant="body1">Expert Agents</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Team */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Meet Our Team
          </Typography>
          <Typography 
            paragraph 
            align="center" 
            sx={{ maxWidth: 700, mx: 'auto', mb: 5 }}
          >
            Our talented team of real estate professionals is dedicated to providing exceptional service and expertise to all our clients.
          </Typography>

          <Grid container spacing={4}>
            {teamMembers.map((member) => (
              <Grid item xs={12} sm={6} md={3} key={member.id}>
                <Card sx={{ height: '100%' }}>
                  <Box
                    sx={{
                      position: 'relative',
                      paddingTop: '100%', /* 1:1 Aspect Ratio */
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src={member.image}
                      alt={member.name}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {member.title}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body2">
                      {member.bio}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Awards & Recognition */}
        <Box>
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Awards & Recognition
          </Typography>
          <Typography 
            paragraph 
            align="center" 
            sx={{ maxWidth: 700, mx: 'auto', mb: 5 }}
          >
            Our commitment to excellence has been recognized by industry leaders and organizations.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    color: 'secondary.contrastText',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <Award size={28} />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Top Luxury Real Estate Agency
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  2023, 2022, 2021
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Recognized as a leading luxury real estate agency for three consecutive years by Real Estate Excellence Awards.
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    color: 'secondary.contrastText',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <Award size={28} />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Client Satisfaction Award
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  2023
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Awarded for our exceptional client service and satisfaction ratings by National Association of Realtors.
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    color: 'secondary.contrastText',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <Award size={28} />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Innovation in Real Estate
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  2022
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Recognized for implementing innovative technologies and marketing strategies in the real estate industry.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;