import React from 'react';
import styles from './CarCard.module.scss';
interface CarCardProps {
  model: string;
  year: number;
  price: number;
  image: string;
  onDetailClick: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ model, year, price, image, onDetailClick }) => {
  return (
    <div className={styles.car_card}>
      <img src={image} alt={model} className={styles.car_image} />
      <div className={styles.car_info}>
        <div>{model}</div>
        <div>Year: {year}</div>
        <div>Price: ${price}</div>
        <button onClick={onDetailClick}>Подробнее</button>
      </div>
    </div>
  );
};

export default CarCard;
