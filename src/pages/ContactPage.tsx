import React, { useState } from 'react';
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { 
  Home as HomeIcon,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Send
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, phone, subject, message });
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
            backgroundImage: `linear-gradient(to bottom, rgba(10,36,99,0.85), rgba(10,36,99,0.95)), url('https://images.pexels.com/photos/6386791/pexels-photo-6386791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
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
            <Typography color="white">Contact Us</Typography>
          </Breadcrumbs>
          
          <Typography variant="h2" component="h1" sx={{ fontWeight: 600, mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9, maxWidth: 700 }}>
            Get in touch with our team of real estate experts for any inquiries or to schedule a property viewing
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper 
              elevation={2}
              sx={{ 
                p: { xs: 3, md: 4 },
                mb: { xs: 4, md: 0 },
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
                Send Us a Message
              </Typography>
              <Typography paragraph color="text.secondary" sx={{ mb: 4 }}>
                Fill out the form below and our team will get back to you as soon as possible.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      variant="outlined"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Phone"
                      variant="outlined"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      variant="outlined"
                      multiline
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      startIcon={<Send />}
                      sx={{ mt: 2, px: 4, py: 1.5 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Box>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
                Contact Information
              </Typography>
              <Typography paragraph color="text.secondary">
                For immediate assistance, you can reach out to us using the information below.
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Paper 
                      elevation={1}
                      sx={{ 
                        p: 3,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          bgcolor: 'primary.light',
                          color: 'white',
                          mr: 3,
                        }}
                      >
                        <MapPin size={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Our Location
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          123 Real Estate Blvd, Luxury City, 10001
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>

                  <Grid item xs={12}>
                    <Paper 
                      elevation={1}
                      sx={{ 
                        p: 3,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          bgcolor: 'primary.light',
                          color: 'white',
                          mr: 3,
                        }}
                      >
                        <Phone size={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Phone Number
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          +1 (555) 123-4567
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          +1 (555) 987-6543
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>

                  <Grid item xs={12}>
                    <Paper 
                      elevation={1}
                      sx={{ 
                        p: 3,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          bgcolor: 'primary.light',
                          color: 'white',
                          mr: 3,
                        }}
                      >
                        <Mail size={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Email Address
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          info@luxeestates.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          support@luxeestates.com
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>

                  <Grid item xs={12}>
                    <Paper 
                      elevation={1}
                      sx={{ 
                        p: 3,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          bgcolor: 'primary.light',
                          color: 'white',
                          mr: 3,
                        }}
                      >
                        <Clock size={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Working Hours
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Monday-Friday: 9:00 AM - 6:00 PM
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Saturday: 10:00 AM - 4:00 PM
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Sunday: Closed
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Map */}
      <Box sx={{ height: 500, width: '100%', mt: 4 }}>
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
    </Box>
  );
};

export default ContactPage;