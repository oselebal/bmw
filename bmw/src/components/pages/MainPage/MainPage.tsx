import React, { useState } from 'react';
import Header from '../../Header/Header';
import CarCard from '../../Cards/CarCard';
import Footer from '../../Footer/Footer';
import cars from '../../../data/carsData';
import styles from './MainPage.module.scss';

const MainPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredCars =
    selectedCategory === 'All' ? cars : cars.filter((car) => car.category === selectedCategory);

  return (
    <>
      <Header />
      <div className={styles.home}>
        <main className={styles.main}>
          <div className={styles.topText}>
            <h1>Купить BMW</h1>
            <p>
              Добро пожаловать в наш сервис по продаже автомобилей BMW. Мы предлагаем лучшие
              предложения на автомобили BMW.
            </p>
          </div>
          <div className={styles.filters}>
            <button onClick={() => handleCategoryChange('All')}>Все</button>
            <button onClick={() => handleCategoryChange('Sedan')}>Седаны</button>
            <button onClick={() => handleCategoryChange('SUV')}>Внедорожники</button>
            <button onClick={() => handleCategoryChange('Convertible')}>Кабриолеты</button>
            <button onClick={() => handleCategoryChange('Hybrid')}>Гибриды</button>
            <button onClick={() => handleCategoryChange('Coupe')}>Купе</button>
          </div>
          <div className={styles.carGrid}>
            {filteredCars.map((car, index) => (
              <CarCard
                key={index}
                model={car.model}
                year={car.year}
                price={car.price}
                image={car.image}
                onDetailClick={() => alert(`Подробнее ${car.model}`)}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
