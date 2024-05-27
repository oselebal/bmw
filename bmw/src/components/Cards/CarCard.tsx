import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CarCard.module.scss';

interface CarCardProps {
  model: string;
  year: number;
  price: number;
  image: string;
  onDetailClick: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ model, year, price, image, onDetailClick }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/car/${model}`);
  };

  return (
    <div className={styles.carCard} onClick={handleCardClick}>
      <img src={image} alt={model} className={styles.carImage} />
      <div className={styles.carInfo}>
        <h3>{model}</h3>
        <p>Year: {year}</p>
        <p>Price: ${price}</p>
        <button onClick={onDetailClick}>More Details</button>
      </div>
    </div>
  );
};

export default CarCard;
