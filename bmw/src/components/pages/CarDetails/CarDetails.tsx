import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import cars from '../../../data/carsData';
import styles from './CarDetails.module.scss';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = cars.find((car) => car.model === id);

  if (!car) {
    return <div>Автомобиль не найден</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.carDetails}>
        <main className={styles.main}>
          <h1>{car.model}</h1>
          <img src={car.image} alt={car.model} />
          <p>Год: {car.year}</p>
          <p>Цена: ${car.price}</p>
          <p>Категория: {car.category}</p>
          <h2>Спецификации</h2>
          <ul>
            {car.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CarDetails;
