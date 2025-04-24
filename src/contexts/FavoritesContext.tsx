import React, { createContext, useContext, useState, useCallback } from 'react';

interface FavoritesContextType {
  favorites: number[];
  toggleFavorite: (propertyId: number) => void;
  isFavorite: (propertyId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem('propertyFavorites');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = useCallback((propertyId: number) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(propertyId)
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId];
      
      // Save to localStorage
      localStorage.setItem('propertyFavorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback((propertyId: number) => {
    return favorites.includes(propertyId);
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}; 