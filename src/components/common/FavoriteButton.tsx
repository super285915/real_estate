import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Heart } from 'lucide-react';
import { useTheme } from '@mui/material/styles';
import { useFavorites } from '../../contexts/FavoritesContext';

interface FavoriteButtonProps {
  propertyId: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ propertyId }) => {
  const theme = useTheme();
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFavorited = isFavorite(propertyId);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent card click event from triggering
    event.stopPropagation();
    toggleFavorite(propertyId);
  };

  return (
    <Tooltip title={isFavorited ? "Remove from favorites" : "Add to favorites"}>
      <IconButton
        onClick={handleClick}
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          bgcolor: 'white',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            bgcolor: 'white',
          },
        }}
      >
        <Heart
          size={20}
          fill={isFavorited ? theme.palette.primary.main : 'none'}
          color={isFavorited ? theme.palette.primary.main : theme.palette.grey[700]}
        />
      </IconButton>
    </Tooltip>
  );
};

export default FavoriteButton; 