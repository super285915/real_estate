import React, { useState, useEffect, useRef } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
  Alert,
  Snackbar,
} from '@mui/material';
import { Edit2, Mail, Phone, MapPin, Camera, Save, Building2, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme as useAppTheme } from '../contexts/ThemeContext';
import { userService, UserProfile } from '../services/userService';

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ProfilePage = () => {
  const theme = useTheme();
  const { themeMode } = useAppTheme();
  const { currentUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [profileData, setProfileData] = useState<UserProfile>({
    firstName: currentUser?.firstName || '',
    lastName: currentUser?.lastName || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
    address: currentUser?.address || '',
    bio: currentUser?.bio || '',
    photoURL: currentUser?.photoURL,
  });

  const [stats, setStats] = useState({
    listedProperties: 0,
    favorites: 0,
  });

  // Load user stats
  useEffect(() => {
    const loadStats = async () => {
      if (currentUser?.id) {
        try {
          const userStats = await userService.getUserStats(currentUser.id);
          setStats(userStats);
        } catch (error) {
          console.error('Error loading user stats:', error);
        }
      }
    };
    loadStats();
  }, [currentUser?.id]);

  const handleEditToggle = () => {
    if (isEditing) {
      // If we're currently editing, this is a cancel action
      setProfileData({
        firstName: currentUser?.firstName || '',
        lastName: currentUser?.lastName || '',
        email: currentUser?.email || '',
        phone: currentUser?.phone || '',
        address: currentUser?.address || '',
        bio: currentUser?.bio || '',
        photoURL: currentUser?.photoURL,
      });
    }
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    if (!currentUser?.id) return;
    
    setLoading(true);
    try {
      const updatedProfile = await userService.updateProfile(currentUser.id, profileData);
      setProfileData(updatedProfile);
      setIsEditing(false);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage({ type: 'error', text: 'Failed to update profile. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof UserProfile) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfileData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!currentUser?.id || !event.target.files?.[0]) return;

    const file = event.target.files[0];
    setLoading(true);

    try {
      const { photoURL } = await userService.uploadProfilePhoto(currentUser.id, file);
      setProfileData(prev => ({ ...prev, photoURL }));
      setMessage({ type: 'success', text: 'Profile photo updated successfully!' });
    } catch (error) {
      console.error('Error uploading photo:', error);
      setMessage({ type: 'error', text: 'Failed to upload photo. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseMessage = () => {
    setMessage(null);
  };

  const statsData: StatItem[] = [
    { 
      icon: <Building2 size={20} />, 
      label: 'Listed Properties', 
      value: stats.listedProperties.toString() 
    },
    { 
      icon: <Heart size={20} />, 
      label: 'Favorites', 
      value: stats.favorites.toString() 
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handlePhotoChange}
      />
      
      <Snackbar
        open={!!message}
        autoHideDuration={6000}
        onClose={handleCloseMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseMessage} 
          severity={message?.type || 'info'} 
          sx={{ width: '100%' }}
          style={{ display: message ? 'flex' : 'none' }}
        >
          {message?.text}
        </Alert>
      </Snackbar>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          backgroundColor: themeMode === 'dark' ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
          color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Profile
          </Typography>
          <Typography variant="body1" color={themeMode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'}>
            Manage your personal information and preferences
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Profile Picture and Stats Section */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Card
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: themeMode === 'dark' ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.6)',
                  border: `1px solid ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                }}
              >
                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                  <Avatar
                    src={profileData.photoURL || ''}
                    alt={`${profileData.firstName} ${profileData.lastName}`}
                    sx={{
                      width: 120,
                      height: 120,
                      mb: 2,
                      border: `4px solid ${theme.palette.primary.main}`,
                    }}
                  />
                  <IconButton
                    onClick={handlePhotoClick}
                    disabled={loading}
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      right: 0,
                      backgroundColor: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    <Camera size={18} color="white" />
                  </IconButton>
                </Box>
                
                <Typography variant="h6" gutterBottom>
                  {profileData.firstName} {profileData.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {profileData.email}
                </Typography>
                
                <Button
                  variant={isEditing ? "contained" : "outlined"}
                  startIcon={isEditing ? <Save size={18} /> : <Edit2 size={18} />}
                  onClick={isEditing ? handleSave : handleEditToggle}
                  disabled={loading}
                  sx={{ mt: 2 }}
                >
                  {isEditing ? (loading ? 'Saving...' : 'Save Changes') : 'Edit Profile'}
                </Button>
                {isEditing && (
                  <Button
                    variant="text"
                    color="inherit"
                    onClick={handleEditToggle}
                    sx={{ mt: 1 }}
                  >
                    Cancel
                  </Button>
                )}
              </Card>

              {/* Stats Card */}
              <Card
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: themeMode === 'dark' ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.6)',
                  border: `1px solid ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Activity
                </Typography>
                <Stack spacing={2}>
                  {statsData.map((stat, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 1.5,
                        borderRadius: 1,
                        backgroundColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ color: theme.palette.text.secondary }}>
                          {stat.icon}
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {stat.label}
                        </Typography>
                      </Box>
                      <Typography variant="body1" fontWeight={600} sx={{ color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)' }}>
                        {stat.value}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Stack>
          </Grid>

          {/* Profile Details Section */}
          <Grid item xs={12} md={8}>
            <Card
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: themeMode === 'dark' ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.6)',
                border: `1px solid ${themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)' }}>
                Personal Information
              </Typography>
              <Divider sx={{ mb: 3 }} />
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    value={profileData.firstName}
                    onChange={handleChange('firstName')}
                    disabled={!isEditing}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                        color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                      },
                      '& .MuiInputLabel-root': {
                        color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    value={profileData.lastName}
                    onChange={handleChange('lastName')}
                    disabled={!isEditing}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                        color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                      },
                      '& .MuiInputLabel-root': {
                        color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    value={profileData.email}
                    onChange={handleChange('email')}
                    disabled={!isEditing}
                    InputProps={{
                      startAdornment: (
                        <Mail size={18} style={{ marginRight: 8, color: theme.palette.text.secondary }} />
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                        color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                      },
                      '& .MuiInputLabel-root': {
                        color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    value={profileData.phone}
                    onChange={handleChange('phone')}
                    disabled={!isEditing}
                    InputProps={{
                      startAdornment: (
                        <Phone size={18} style={{ marginRight: 8, color: theme.palette.text.secondary }} />
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                        color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                      },
                      '& .MuiInputLabel-root': {
                        color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    value={profileData.address}
                    onChange={handleChange('address')}
                    disabled={!isEditing}
                    InputProps={{
                      startAdornment: (
                        <MapPin size={18} style={{ marginRight: 8, color: theme.palette.text.secondary }} />
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                        color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                      },
                      '& .MuiInputLabel-root': {
                        color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bio"
                    value={profileData.bio}
                    onChange={handleChange('bio')}
                    disabled={!isEditing}
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                        color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                      },
                      '& .MuiInputLabel-root': {
                        color: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProfilePage; 