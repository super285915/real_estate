import React, { createContext, useContext, useState, useCallback } from 'react';
import { User, AuthState, LoginCredentials, SignupData } from '../types/auth';

interface AuthContextType extends AuthState {
  currentUser: any | null;
  login: (data: { email: string; password: string }) => Promise<void>;
  signup: (data: { email: string; password: string; firstName: string; lastName: string }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: false,
  });

  const login = useCallback(async (credentials: LoginCredentials) => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      // TODO: Replace with actual API call
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        firstName: 'John',
        lastName: 'Doe',
        role: 'user',
        createdAt: new Date().toISOString(),
      };
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setState({
        user: mockUser,
        isAuthenticated: true,
        loading: false,
      });
      
      // Store auth token
      localStorage.setItem('authToken', 'mock-token');
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      throw error;
    }
  }, []);

  const signup = useCallback(async (data: SignupData) => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      // TODO: Replace with actual API call
      const mockUser: User = {
        id: '1',
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        role: 'user',
        createdAt: new Date().toISOString(),
      };
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setState({
        user: mockUser,
        isAuthenticated: true,
        loading: false,
      });
      
      // Store auth token
      localStorage.setItem('authToken', 'mock-token');
    } catch (error) {
      setState(prev => ({ ...prev, loading: false }));
      throw error;
    }
  }, []);

  const logout = async () => {
    setState({
      user: null,
      isAuthenticated: false,
      loading: false,
    });
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        currentUser: state.user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}; 