'use client';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useShoppingCart } from '@/app/Context/ShoppingCartContext';

const FavoriteAccesory = ({ product }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useShoppingCart();
  const favorite = isFavorite(product.id);

  const toggleFavorite = () => {
    favorite ? removeFromFavorites(product.id) : addToFavorites(product);
  };

  return (
    <button onClick={toggleFavorite} className="text-red-500 text-xl">
      {favorite ? <BsHeartFill /> : <BsHeart />}
    </button>
  );
};

export default FavoriteAccesory;
