import { useDispatch, useSelector } from "react-redux";
import { Heart, HeartOff } from "lucide-react";

import { toggleFavorite } from "@/redux/favorites/slice";
import { selectFavorites } from "@/redux/favorites/selectors";

const FavoriteButton = ({ carId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(carId);

  const handleToggle = () => {
    dispatch(toggleFavorite(carId));
  };

  return (
    <button
      onClick={handleToggle}
      className="cursor-pointer absolute top-4 right-4 z-10"
    >
      {isFavorite ? (
        <Heart size={20} color="#3470FF" fill="#3470FF" />
      ) : (
        <Heart size={20} color="#fff" />
      )}
    </button>
  );
};

export default FavoriteButton;
