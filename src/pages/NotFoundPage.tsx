import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 200px)',
        textAlign: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '8rem', md: '10rem' },
            fontWeight: 700,
            color: 'primary.main',
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
        >
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
          startIcon={<Home />}
          size="large"
          sx={{ py: 1.5, px: 4 }}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFoundPage;