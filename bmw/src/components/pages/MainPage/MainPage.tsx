import React from 'react';
import Header from '../../Header/Header';
import CarCard from '../../Cards/CarCard';
import Footer from '../../Footer/Footer';
import SpecialOffers from '../../SpecialOffers/SpecialOffers';
import cars from '../../../data/carsData';
import styles from './MainPage.module.scss';

const MainPage: React.FC = () => {
  const displayedCars = cars.slice(0, 2);
  return (
    <>
      <Header />
      <div className={styles.home}>
        <main className={styles.main}>
          <div className={styles.topText}>
            <h1>Купить BMW</h1>
            <p>Пошел я нахуй, хз че тут писать.</p>
          </div>
          <div className={styles.carGrid}>
            {displayedCars.map((car, index) => (
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
          {/* <SpecialOffers /> */}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
