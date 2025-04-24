import axios from 'axios';

const API_URL =  'http://localhost:3001/api';

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  bio: string;
  photoURL?: string;
}

interface PhotoResponse {
  photoURL: string;
}

interface StatsResponse {
  listedProperties: number;
  favorites: number;
}

export const userService = {
  async updateProfile(userId: string, profileData: Partial<UserProfile>): Promise<UserProfile> {
    const token = localStorage.getItem('authToken');
    const response = await axios.put<UserProfile>(
      `${API_URL}/users/${userId}`,
      profileData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  async uploadProfilePhoto(userId: string, file: File): Promise<PhotoResponse> {
    const token = localStorage.getItem('authToken');
    const formData = new FormData();
    formData.append('photo', file);

    const response = await axios.post<PhotoResponse>(
      `${API_URL}/users/${userId}/photo`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  },

  async getUserStats(userId: string): Promise<StatsResponse> {
    const token = localStorage.getItem('authToken');
    const response = await axios.get<StatsResponse>(
      `${API_URL}/users/${userId}/stats`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
}; 